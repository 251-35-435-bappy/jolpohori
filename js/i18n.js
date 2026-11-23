// ============================================================================
// Jolprohori UI - Internationalization (বাংলা)
// সব ইন্টারফেসের টেক্সট বাংলা ভাষায়
// ============================================================================

const translations = {
  bn: {
    // App
    app_name: "জলপ্রহরী",
    app_tagline: "দক্ষ ও নিরাপদ ব্যবস্থাপনা সিস্টেম",

    // Sidebar Navigation
    nav_dashboard: "ড্যাশবোর্ড",
    nav_modules: "মডিউলসমূহ",
    nav_users: "ব্যবহারকারী",
    nav_reports: "রিপোর্ট",
    nav_settings: "সেটিংস",
    nav_help: "সহায়তা",
    nav_logout: "লগআউট",

    // Header
    header_notifications: "নোটিফিকেশন",
    header_profile: "প্রোফাইল",

    // Dashboard
    dashboard_welcome: "স্বাগতম",
    dashboard_subtitle: "আপনার ড্যাশবোর্ডে আপনাকে স্বাগত",
    stat_total_users: "মোট ব্যবহারকারী",
    stat_active_modules: "সক্রিয় মডিউল",
    stat_reports: "রিপোর্ট",
    stat_system_health: "সিস্টেম স্বাস্থ্য",

    // Modules
    modules_title: "উপলব্ধ মডিউলসমূহ",
    modules_subtitle: "প্রতিটি মডিউল পৃথক পৃথকভাবে কাজ করে",
    module_user_mgmt: "ব্যবহারকারী ব্যবস্থাপনা",
    module_user_desc: "ব্যবহারকারীর প্রোফাইল এবং অ্যাক্সেস নিয়ন্ত্রণ",
    module_data_entry: "ডাটা এন্ট্রি",
    module_data_desc: "নবীন তথ্য প্রবেশ এবং সম্পাদনা",
    module_analytics: "অ্যানালিটিক্স",
    module_analytics_desc: "তথ্য বিশ্লেষণ এবং রিপোর্ট তৈরি",
    module_settings: "সিস্টেম সেটিংস",
    module_settings_desc: "অ্যাপলিকেশন কনফিগারেশন",
    module_support: "সহায়তা কেন্দ্র",
    module_support_desc: "গ্রাহক সহায়তা এবং টিকিট ব্যবস্থাপনা",
    module_billing: "বিলিং",
    module_billing_desc: "পেমেন্ট এবং ইনভয়েস ব্যবস্থাপনা",

    // Common
    common_save: "সংরক্ষণ",
    common_cancel: "বাতিল",
    common_delete: "মুছে ফেলা",
    common_edit: "সম্পাদনা",
    common_view: "দেখা",
    common_search: "অনুসন্ধান",
    common_filter: "ফিল্টার",
    common_close: "বন্ধ করুন",
    common_loading: "লোড করা হচ্ছে...",
    common_error: "ত্রুটি হয়েছে",
    common_success: "সফলভাবে সম্পন্ন হলো",
    common_warning: "সতর্কতা",
    common_info: "তথ্য",

    // Auth
    auth_login: "লগইন করুন",
    auth_logout: "লগআউট করুন",
    auth_username: "ব্যবহারকারীর নাম",
    auth_password: "পাসওয়ার্ড",
    auth_remember: "আমাকে মনে রাখুন",
    auth_forgot: "পাসওয়ার্ড ভুলে গেছেন?",

    // Status
    status_active: "সক্রিয়",
    status_inactive: "নিষ্ক্রিয়",
    status_pending: "অপেক্ষিত",
    status_completed: "সম্পন্ন",
    status_cancelled: "বাতিল",

    // Language
    lang_bangla: "বাংলা",
    lang_english: "ইংরেজি",
  },

  en: {
    app_name: "Jolprohori",
    app_tagline: "Efficient & Secure Management System",
    nav_dashboard: "Dashboard",
    nav_modules: "Modules",
    nav_users: "Users",
    nav_reports: "Reports",
    nav_settings: "Settings",
    nav_help: "Help",
    nav_logout: "Logout",
    header_notifications: "Notifications",
    header_profile: "Profile",
    dashboard_welcome: "Welcome",
    dashboard_subtitle: "Welcome to your dashboard",
    stat_total_users: "Total Users",
    stat_active_modules: "Active Modules",
    stat_reports: "Reports",
    stat_system_health: "System Health",
    modules_title: "Available Modules",
    modules_subtitle: "Each module works independently",
    module_user_mgmt: "User Management",
    module_user_desc: "User profiles and access control",
    module_data_entry: "Data Entry",
    module_data_desc: "Enter and edit new information",
    module_analytics: "Analytics",
    module_analytics_desc: "Data analysis and report generation",
    module_settings: "System Settings",
    module_settings_desc: "Application configuration",
    module_support: "Support Center",
    module_support_desc: "Customer support and ticket management",
    module_billing: "Billing",
    module_billing_desc: "Payment and invoice management",
    common_save: "Save",
    common_cancel: "Cancel",
    common_delete: "Delete",
    common_edit: "Edit",
    common_view: "View",
    common_search: "Search",
    common_filter: "Filter",
    common_close: "Close",
    common_loading: "Loading...",
    common_error: "Error occurred",
    common_success: "Completed successfully",
    common_warning: "Warning",
    common_info: "Information",
    auth_login: "Login",
    auth_logout: "Logout",
    auth_username: "Username",
    auth_password: "Password",
    auth_remember: "Remember me",
    auth_forgot: "Forgot password?",
    status_active: "Active",
    status_inactive: "Inactive",
    status_pending: "Pending",
    status_completed: "Completed",
    status_cancelled: "Cancelled",
    lang_bangla: "Bangla",
    lang_english: "English",
  }
};

class I18n {
  constructor(defaultLang = 'bn') {
    this.currentLang = localStorage.getItem('jolprohori_lang') || defaultLang;
    this.translations = translations;
  }

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('jolprohori_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'bn' ? 'auto' : 'ltr';
    this.updatePage();
  }

  get(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    for (const k of keys) {
      value = value ? value[k] : null;
    }
    return value || key;
  }

  t(key) {
    return this.get(key);
  }

  updatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = this.t(key);
    });
    const appName = this.t('app_name');
    document.title = appName + ' - ড্যাশবোর্ড';
  }
}

window.i18n = new I18n('bn');