import React, { useState } from 'react';
import { AlertCircle, X, ExternalLink, CheckCircle } from 'lucide-react';

/**
 * Supabase Setup Notice
 * Shows a dismissible notice when Supabase is not configured
 */
export function SupabaseSetupNotice() {
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem('supabase-notice-dismissed') === 'true';
  });

  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const isConfigured = supabaseKey && supabaseKey !== '' && supabaseKey !== 'placeholder-key';

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('supabase-notice-dismissed', 'true');
  };

  // Don't show if configured or dismissed
  if (isConfigured || dismissed) {
    return null;
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-full mx-4">
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-xl p-4 shadow-2xl backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1 text-lg">
              🔧 Supabase Setup Required
            </h3>
            <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-3">
              Add your Supabase Anon Key to the <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-800 rounded font-mono text-xs">.env</code> file to enable authentication.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://supabase.com/dashboard/project/niguvyhdgewekhmwbupg/settings/api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Get API Key
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="/SUPABASE_SETUP.md"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-yellow-900 dark:text-yellow-100 text-sm font-medium rounded-lg border border-yellow-300 dark:border-yellow-600 transition-colors"
              >
                Setup Guide
              </a>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-200 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Success notice when Supabase is configured
 */
export function SupabaseConfiguredNotice() {
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem('supabase-success-dismissed') === 'true';
  });

  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const isConfigured = supabaseKey && supabaseKey !== '' && supabaseKey !== 'placeholder-key';

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('supabase-success-dismissed', 'true');
  };

  // Only show if configured and not dismissed
  if (!isConfigured || dismissed) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-600 rounded-xl p-4 shadow-xl">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">
              Supabase Connected! 🎉
            </h4>
            <p className="text-sm text-green-800 dark:text-green-200">
              Authentication is ready to use
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
