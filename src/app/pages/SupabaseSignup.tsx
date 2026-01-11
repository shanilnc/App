import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GraduationCap, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle2, Loader2, Building, BookOpen, Briefcase, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

type Role = 'student' | 'teacher' | 'expert';
type SignupState = 'idle' | 'loading' | 'success' | 'error';

interface ValidationErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  [key: string]: string | undefined;
}

export default function SupabaseSignup() {
  const navigate = useNavigate();
  const { role } = useParams<{ role: Role }>();
  const [signupState, setSignupState] = useState<SignupState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Common fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Student-specific fields
  const [institution, setInstitution] = useState('');
  const [courseYear, setCourseYear] = useState('');
  const [skillInterests, setSkillInterests] = useState('');

  // Teacher-specific fields
  const [institutionName, setInstitutionName] = useState('');
  const [subjectsTaught, setSubjectsTaught] = useState('');
  const [yearsExperience, setYearsExperience] = useState('');

  // Expert-specific fields
  const [industryDomain, setIndustryDomain] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [shortBio, setShortBio] = useState('');

  useEffect(() => {
    // Verify role was selected
    const pendingRole = localStorage.getItem('pendingUserRole');
    if (!pendingRole || pendingRole !== role) {
      navigate('/supabase-signup-questionnaire');
    }
  }, [role, navigate]);

  const getRoleConfig = () => {
    switch (role) {
      case 'student':
        return {
          title: 'Student Signup',
          gradient: 'from-[#48BB78] to-[#38A169]',
          color: '#48BB78',
        };
      case 'teacher':
        return {
          title: 'Teacher Signup',
          gradient: 'from-[#14B8A6] to-[#0D9488]',
          color: '#14B8A6',
        };
      case 'expert':
        return {
          title: 'Expert Signup',
          gradient: 'from-[#9F7AEA] to-[#805AD5]',
          color: '#9F7AEA',
        };
      default:
        return {
          title: 'Signup',
          gradient: 'from-[#FF6B6B] to-[#FFA07A]',
          color: '#FF6B6B',
        };
    }
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};

    if (!fullName.trim()) errors.fullName = 'Full name is required';
    if (!email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email format';
    
    if (!password) errors.password = 'Password is required';
    else if (password.length < 8) errors.password = 'Password must be at least 8 characters';
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      errors.password = 'Password must contain uppercase, lowercase, and number';
    }

    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';

    // Role-specific validation
    if (role === 'student') {
      if (!institution.trim()) errors.institution = 'Institution is required';
      if (!courseYear.trim()) errors.courseYear = 'Course/Year is required';
    } else if (role === 'teacher') {
      if (!institutionName.trim()) errors.institutionName = 'Institution name is required';
      if (!subjectsTaught.trim()) errors.subjectsTaught = 'Subjects taught is required';
      if (!yearsExperience.trim()) errors.yearsExperience = 'Years of experience is required';
    } else if (role === 'expert') {
      if (!industryDomain.trim()) errors.industryDomain = 'Industry/Domain is required';
      if (!currentRole.trim()) errors.currentRole = 'Current role is required';
      if (!shortBio.trim()) errors.shortBio = 'Short bio is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setErrorMessage('Please fix the errors above');
      return;
    }

    setSignupState('loading');
    setErrorMessage('');

    try {
      // SUPABASE INTEGRATION POINT
      // Step 1: Create auth user
      // const { data: authData, error: authError } = await supabase.auth.signUp({
      //   email: email,
      //   password: password,
      // });

      // if (authError) throw authError;

      // Step 2: Create profile with role-specific data
      // const profileData = {
      //   user_id: authData.user.id,
      //   role: role,
      //   full_name: fullName,
      //   email: email,
      //   ...(role === 'student' && {
      //     institution: institution,
      //     course_year: courseYear,
      //     skill_interests: skillInterests,
      //   }),
      //   ...(role === 'teacher' && {
      //     institution_name: institutionName,
      //     subjects_taught: subjectsTaught,
      //     years_experience: parseInt(yearsExperience),
      //   }),
      //   ...(role === 'expert' && {
      //     industry_domain: industryDomain,
      //     current_role: currentRole,
      //     short_bio: shortBio,
      //   }),
      // };

      // const { error: profileError } = await supabase
      //   .from('profiles')
      //   .insert(profileData);

      // if (profileError) throw profileError;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Store user data in localStorage (mock)
      localStorage.setItem('userRole', role || 'student');
      localStorage.setItem('userName', fullName);
      localStorage.removeItem('pendingUserRole');

      setSignupState('success');

      // Navigate to success screen
      setTimeout(() => {
        navigate('/signup-success');
      }, 1000);

    } catch (error: any) {
      setSignupState('error');
      
      // Handle Supabase errors
      if (error.message === 'User already registered') {
        setErrorMessage('This email is already registered. Please log in.');
      } else if (error.message === 'Password should be at least 6 characters') {
        setErrorMessage('Password must be at least 6 characters long.');
      } else {
        setErrorMessage(error.message || 'An error occurred during signup. Please try again.');
      }
    }
  };

  const config = getRoleConfig();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F3] via-[#FFE8D6] to-[#FFD4B8] flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl relative">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B6B] to-[#FFA07A] rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#FFA07A] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-display)' }}>
            EduBridge
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-[#FFE8D6] p-8">
          {/* Progress Indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#48BB78] to-[#38A169] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#48BB78] to-[#38A169]" />
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${config.gradient} flex items-center justify-center text-white text-sm font-bold`}>
                2
              </div>
              <div className="w-16 h-1 bg-[#FFE8D6]" />
              <div className="w-8 h-8 rounded-full bg-[#FFE8D6] flex items-center justify-center text-[#A0AEC0] text-sm font-bold">
                3
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#2D3748] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {config.title}
            </h1>
            <p className="text-[#718096]">Create your account to get started</p>
          </div>

          {/* Supabase Integration Note */}
          <div className="mb-6 p-3 bg-blue-50 border-2 border-blue-200 rounded-xl">
            <p className="text-xs font-mono text-blue-800 mb-2">
              <strong>🔵 Supabase Signup Flow:</strong>
            </p>
            <code className="text-xs text-blue-700 block mb-1">
              1. supabase.auth.signUp({'{'}email, password{'}'})
            </code>
            <code className="text-xs text-blue-700 block">
              2. supabase.from('profiles').insert({'{'}user_id, role, ...fields{'}'})
            </code>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Common Fields */}
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`pl-10 ${validationErrors.fullName ? 'border-red-400' : ''}`}
                  placeholder="John Doe"
                />
              </div>
              {validationErrors.fullName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {validationErrors.fullName}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-10 ${validationErrors.email ? 'border-red-400' : ''}`}
                  placeholder="john@example.com"
                />
              </div>
              {validationErrors.email && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {validationErrors.email}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password *</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`pl-10 pr-10 ${validationErrors.password ? 'border-red-400' : ''}`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718096]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {validationErrors.password && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {validationErrors.password}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`pl-10 pr-10 ${validationErrors.confirmPassword ? 'border-red-400' : ''}`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#718096]"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {validationErrors.confirmPassword && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {validationErrors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t-2 border-[#FFE8D6]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-[#718096]">
                  {role === 'student' ? 'Student' : role === 'teacher' ? 'Teacher' : 'Expert'} Details
                </span>
              </div>
            </div>

            {/* Student-Specific Fields */}
            {role === 'student' && (
              <>
                <div>
                  <Label htmlFor="institution">Institution *</Label>
                  <div className="relative mt-1">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                    <Input
                      id="institution"
                      type="text"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className={`pl-10 ${validationErrors.institution ? 'border-red-400' : ''}`}
                      placeholder="University / College Name"
                    />
                  </div>
                  {validationErrors.institution && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.institution}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="courseYear">Course / Year *</Label>
                  <div className="relative mt-1">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                    <Input
                      id="courseYear"
                      type="text"
                      value={courseYear}
                      onChange={(e) => setCourseYear(e.target.value)}
                      className={`pl-10 ${validationErrors.courseYear ? 'border-red-400' : ''}`}
                      placeholder="e.g., Computer Science - Year 3"
                    />
                  </div>
                  {validationErrors.courseYear && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.courseYear}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="skillInterests">Skill Interests (Optional)</Label>
                  <Textarea
                    id="skillInterests"
                    value={skillInterests}
                    onChange={(e) => setSkillInterests(e.target.value)}
                    className="mt-1 resize-none"
                    rows={2}
                    placeholder="e.g., Web Development, Data Science, AI/ML"
                  />
                </div>
              </>
            )}

            {/* Teacher-Specific Fields */}
            {role === 'teacher' && (
              <>
                <div>
                  <Label htmlFor="institutionName">Institution Name *</Label>
                  <div className="relative mt-1">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                    <Input
                      id="institutionName"
                      type="text"
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      className={`pl-10 ${validationErrors.institutionName ? 'border-red-400' : ''}`}
                      placeholder="School / College Name"
                    />
                  </div>
                  {validationErrors.institutionName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.institutionName}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subjectsTaught">Subjects Taught *</Label>
                  <div className="relative mt-1">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                    <Input
                      id="subjectsTaught"
                      type="text"
                      value={subjectsTaught}
                      onChange={(e) => setSubjectsTaught(e.target.value)}
                      className={`pl-10 ${validationErrors.subjectsTaught ? 'border-red-400' : ''}`}
                      placeholder="e.g., Mathematics, Physics"
                    />
                  </div>
                  {validationErrors.subjectsTaught && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.subjectsTaught}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="yearsExperience">Years of Experience *</Label>
                  <Input
                    id="yearsExperience"
                    type="number"
                    value={yearsExperience}
                    onChange={(e) => setYearsExperience(e.target.value)}
                    className={validationErrors.yearsExperience ? 'border-red-400' : ''}
                    placeholder="e.g., 5"
                    min="0"
                  />
                  {validationErrors.yearsExperience && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.yearsExperience}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Expert-Specific Fields */}
            {role === 'expert' && (
              <>
                <div>
                  <Label htmlFor="industryDomain">Industry / Domain *</Label>
                  <div className="relative mt-1">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                    <Input
                      id="industryDomain"
                      type="text"
                      value={industryDomain}
                      onChange={(e) => setIndustryDomain(e.target.value)}
                      className={`pl-10 ${validationErrors.industryDomain ? 'border-red-400' : ''}`}
                      placeholder="e.g., Software Engineering, Finance"
                    />
                  </div>
                  {validationErrors.industryDomain && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.industryDomain}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="currentRole">Current Role *</Label>
                  <div className="relative mt-1">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#718096]" />
                    <Input
                      id="currentRole"
                      type="text"
                      value={currentRole}
                      onChange={(e) => setCurrentRole(e.target.value)}
                      className={`pl-10 ${validationErrors.currentRole ? 'border-red-400' : ''}`}
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>
                  {validationErrors.currentRole && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.currentRole}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="shortBio">Short Bio *</Label>
                  <Textarea
                    id="shortBio"
                    value={shortBio}
                    onChange={(e) => setShortBio(e.target.value)}
                    className={`mt-1 resize-none ${validationErrors.shortBio ? 'border-red-400' : ''}`}
                    rows={3}
                    placeholder="Tell us about your expertise and what you'd like to share..."
                  />
                  {validationErrors.shortBio && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.shortBio}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Error Message */}
            {signupState === 'error' && errorMessage && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border-2 border-red-200 rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-700">{errorMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={signupState === 'loading' || signupState === 'success'}
              className={`w-full h-12 bg-gradient-to-r ${config.gradient} hover:opacity-90 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6`}
            >
              {signupState === 'loading' ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Account...
                </div>
              ) : signupState === 'success' ? (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Success! Redirecting...
                </div>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/supabase-login')}
              className="text-sm text-[#718096] hover:text-[#2D3748] transition-colors"
            >
              Already have an account? <span style={{ color: config.color }} className="font-medium">Log In</span>
            </button>
          </div>
        </div>

        {/* Developer Notes */}
        <div className="mt-6 p-4 bg-gray-900 rounded-xl border-2 border-gray-700">
          <p className="text-xs font-semibold text-gray-300 mb-3">📋 Supabase Data Mapping:</p>
          <div className="text-xs text-gray-400 space-y-1">
            <p><strong className="text-green-400">auth.users:</strong> {email || '(email)'}</p>
            <p><strong className="text-green-400">profiles.role:</strong> {role}</p>
            <p><strong className="text-green-400">profiles.full_name:</strong> {fullName || '(full_name)'}</p>
            {role === 'student' && (
              <>
                <p><strong className="text-green-400">profiles.institution:</strong> {institution || '(institution)'}</p>
                <p><strong className="text-green-400">profiles.course_year:</strong> {courseYear || '(course_year)'}</p>
              </>
            )}
            {role === 'teacher' && (
              <>
                <p><strong className="text-green-400">profiles.institution_name:</strong> {institutionName || '(institution_name)'}</p>
                <p><strong className="text-green-400">profiles.subjects_taught:</strong> {subjectsTaught || '(subjects_taught)'}</p>
              </>
            )}
            {role === 'expert' && (
              <>
                <p><strong className="text-green-400">profiles.industry_domain:</strong> {industryDomain || '(industry_domain)'}</p>
                <p><strong className="text-green-400">profiles.current_role:</strong> {currentRole || '(current_role)'}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
