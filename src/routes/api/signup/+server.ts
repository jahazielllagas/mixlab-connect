import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

interface SignupData {
    full_name: string;
    email_address: string;
}

async function emailExists(email: string): Promise<boolean> {
    const normalized = email.trim().toLowerCase();
    try {
        const { data, error } = await supabase
            .from<SignupData>('beta_signups')
            .select('email_address')
            .eq('email_address', normalized)
            .limit(1)
            .maybeSingle();

        if (error) {
            console.error('[Server] Error checking existing email:', error);
            throw error;
        }

        return !!data;
    } catch (err) {
        console.error('[Server] Unexpected error checking email existence:', err);
        throw err;
    }
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { fullName, emailAddress } = await request.json();

        console.log('[Server] Signup request received:', { fullName, emailAddress });

        const normalizedEmail = emailAddress.trim().toLowerCase();

        // check existence first
        const exists = await emailExists(normalizedEmail);
        if (exists) {
            console.log('[Server] Email already registered, allowing access:', normalizedEmail);
            // Return success to show download links for existing users
            return json({ 
                success: true, 
                alreadyRegistered: true,
                message: 'Email already registered. Showing download links.' 
            });
        }

        // insert and request the inserted row back
        const { data, error, status } = await supabase
            .from<SignupData>('beta_signups')
            .insert([{ full_name: fullName, email_address: normalizedEmail }])
            .select();

        console.log('[Server] Supabase response status:', status);
        console.log('[Server] Supabase response data:', data);

        if (error) {
            console.error('[Server] Error saving to database:', error);
            return json({ error: error.message || 'Failed to save signup' }, { status: 400 });
        }

        console.log('[Server] Signup successful for:', normalizedEmail);
        return json({ success: true, data });
    } catch (err) {
        console.error('[Server] Unexpected error:', err);
        return json(
            { error: (err as Error).message || 'Unexpected error' },
            { status: 500 }
        );
    }
};