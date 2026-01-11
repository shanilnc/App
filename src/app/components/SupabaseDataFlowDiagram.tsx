import React from 'react';
import { Database, User, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

/**
 * Supabase Data Flow Visualization Component
 * 
 * This component provides a visual reference for developers
 * showing how data flows through the Supabase authentication system.
 * 
 * Usage: Can be displayed in developer documentation or debug panels
 */

export function SupabaseDataFlowDiagram() {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 border-2 border-gray-700">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Database className="w-6 h-6 text-blue-400" />
        Supabase Authentication Data Flow
      </h2>

      <div className="space-y-8">
        {/* Step 1: User Signup */}
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                User Signup
              </h3>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <code className="text-sm text-green-400 block mb-2">
                  supabase.auth.signUp({'{'}email, password{'}'})
                </code>
                <p className="text-xs text-gray-400">
                  → Creates user in <span className="text-yellow-400">auth.users</span> table
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  → Returns <span className="text-blue-400">user.id</span> (UUID)
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-700" />
        </div>

        {/* Step 2: Create Profile */}
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-400" />
                Create Profile
              </h3>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <code className="text-sm text-green-400 block mb-2">
                  supabase.from('profiles').insert({'{'}...{'}'})
                </code>
                <div className="mt-3 space-y-1">
                  <p className="text-xs text-gray-300">
                    <span className="text-yellow-400">user_id:</span> authData.user.id
                  </p>
                  <p className="text-xs text-gray-300">
                    <span className="text-yellow-400">role:</span> 'student' | 'teacher' | 'expert'
                  </p>
                  <p className="text-xs text-gray-300">
                    <span className="text-yellow-400">full_name:</span> string
                  </p>
                  <p className="text-xs text-gray-300">
                    <span className="text-yellow-400">email:</span> string
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    + role-specific fields...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-700" />
        </div>

        {/* Step 3: Login */}
        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                User Login
              </h3>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <code className="text-sm text-green-400 block mb-2">
                  supabase.auth.signInWithPassword({'{'}email, password{'}'})
                </code>
                <p className="text-xs text-gray-400 mt-2">
                  → Returns authenticated user session
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  → Fetch profile: <code className="text-blue-400">profiles.select()</code>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-700" />
        </div>

        {/* Step 4: Role-Based Redirect */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold">
            4
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange-400" />
              Role-Based Redirect
            </h3>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">
                    <span className="text-green-400">student</span> → /dashboard/student
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-teal-400" />
                  <span className="text-sm text-gray-300">
                    <span className="text-teal-400">teacher</span> → /dashboard/teacher
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">
                    <span className="text-purple-400">expert</span> → /dashboard/expert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Database Schema Reference */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <h3 className="text-white font-semibold mb-4">Database Tables</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* auth.users */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">auth.users (Built-in)</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>• id (uuid, PK)</li>
              <li>• email (text, unique)</li>
              <li>• encrypted_password (text)</li>
              <li>• email_confirmed_at (timestamp)</li>
              <li>• created_at (timestamp)</li>
            </ul>
          </div>

          {/* profiles */}
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h4 className="text-sm font-semibold text-purple-400 mb-2">profiles (Custom)</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>• id (uuid, PK)</li>
              <li>• user_id (uuid, FK → auth.users)</li>
              <li>• role (text: student|teacher|expert)</li>
              <li>• full_name (text)</li>
              <li>• email (text)</li>
              <li>• + role-specific fields</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Row Level Security Note */}
      <div className="mt-6 p-4 bg-yellow-900/20 border-2 border-yellow-700/50 rounded-lg">
        <p className="text-xs text-yellow-400 font-semibold mb-2">
          🔒 Security: Row Level Security (RLS) Enabled
        </p>
        <ul className="text-xs text-yellow-300 space-y-1">
          <li>• Users can only view/edit their own profile</li>
          <li>• Enforced at database level by Supabase</li>
          <li>• Policy: <code>auth.uid() = user_id</code></li>
        </ul>
      </div>
    </div>
  );
}

export default SupabaseDataFlowDiagram;
