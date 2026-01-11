import React from 'react';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

/**
 * Supabase Configuration Status Component
 * Shows whether Supabase is properly configured
 */
export function SupabaseStatus() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const isConfigured = supabaseUrl && supabaseUrl !== '' && 
                       supabaseKey && supabaseKey !== '' && 
                       supabaseKey !== 'your-anon-key-here';

  if (!isConfigured) {
    return (
      <div className="fixed bottom-4 right-4 z-50 max-w-sm">
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-2 border-yellow-400 dark:border-yellow-600 rounded-xl p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                Supabase Not Configured
              </h4>
              <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                Add your Supabase credentials to `.env` file
              </p>
              <a 
                href="/SUPABASE_SETUP.md" 
                target="_blank"
                className="text-sm font-medium text-yellow-900 dark:text-yellow-100 underline hover:no-underline"
              >
                View Setup Guide →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null; // Hide when properly configured
}

/**
 * Inline status badge for development
 */
export function SupabaseStatusBadge() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  const isConfigured = supabaseUrl && supabaseUrl !== '' && 
                       supabaseKey && supabaseKey !== '' && 
                       supabaseKey !== 'your-anon-key-here';

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
      {isConfigured ? (
        <>
          <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
          <span className="text-gray-700 dark:text-gray-300">Supabase Connected</span>
        </>
      ) : (
        <>
          <AlertCircle className="w-3.5 h-3.5 text-yellow-600" />
          <span className="text-gray-700 dark:text-gray-300">Supabase Setup Required</span>
        </>
      )}
    </div>
  );
}
