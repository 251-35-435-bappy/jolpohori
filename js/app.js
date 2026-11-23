// Jolprohori Dashboard JavaScript
class DashboardApp {
  constructor() {
    this.currentModule = 'dashboard';
    this.user = { name: "ব্যবহারকারী", role: "অ্যাডমিন", avatar: "AI" };
    this.init();
  }

  init() {
    this.checkLogin();
    this.setupNavigation();
    this.loadModule('dashboard');
  }

  checkLogin() {
    const saved = localStorage.getItem('jolprohori_user');
    if (saved) { this.user = JSON.parse(saved); }
    document.getElementById('user-name').textContent = this.user.name;
    document.getElementById('user-role').textContent = this.user.role;
    document.getElementById('user-avatar').textContent = this.user.avatar;
  }

  setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        const module = item.getAttribute('data-module') || item.getAttribute('onclick').match(/loadModule\('([^']+)'\)/)[1];
        this.loadModule(module);
      });
    });
  }

  loadModule(moduleName) {
    this.currentModule = moduleName;
    const content = document.getElementById('content-area');
    document.getElementById('page-title').textContent = this.getModuleTitle(moduleName);
    switch (moduleName) {
      case 'dashboard': this.renderDashboard(content); break;
      case 'users': this.renderUsers(content); break;
      case 'reports': this.renderReports(content); break;
      case 'billing': this.renderBilling(content); break;
      case 'settings': this.renderSettings(content); break;
      case 'help': this.renderHelp(content); break;
    }
  }

  getModuleTitle(moduleName) {
    const titles = { 'dashboard': 'ড্যাশবোর্ড', 'users': 'ব্যবহারকারী', 'reports': 'রিপোর্ট', 'billing': 'বিলিং', 'settings': 'সেটিংস', 'help': 'সহায়তা' };
    return titles[moduleName] || 'ড্যাশবোর্ড';
  }

  renderDashboard(container) {
    container.innerHTML = `
      <div class="dashboard-stats">
        <div class="stat-card">
          <div class="stat-info"><div class="stat-label">মোট ব্যবহারকারী</div><div class="stat-value">1,245</div></div><div class="stat-icon primary">👥</div>
        </div>
        <div class="stat-card">
          <div class="stat-info"><div class="stat-label">সক্রিয় মডিউল</div><div class="stat-value">9</div></div><div class="stat-icon success">📦</div>
        </div>
        <div class="stat-card">
          <div class="stat-info"><div class="stat-label">রিপোর্ট</div><div class="stat-value">45</div></div><div class="stat-icon warning">📊</div>
        </div>
        <div class="stat-card">
          <div class="stat-info"><div class="stat-label">সিস্টেম স্বাস্থ্য</div><div class="stat-value">98%</div></div><div class="stat-icon info">💚</div>
        </div>
      </div>
      <div class="dashboard-modules">
        <h2>দ্রুত অ্যাকশন</h2>
        <div class="modules-grid">
          <div class="module-card" onclick="app.loadModule('users')"><div class="module-icon blue">👤</div><div class="module-content"><h3>ব্যবহারকারী ব্যবস্থাপনা</h3><p>প্রোফাইল এবং অ্যাক্সেস নিয়ন্ত্রণ</p></div></div>
          <div class="module-card" onclick="app.loadModule('reports')"><div class="module-icon green">📊</div><div class="module-content"><h3>রিপোর্ট ও অ্যানালিটিক্স</h3><p>তথ্য বিশ্লেষণ এবং রিপোর্ট তৈরি</p></div></div>
          <div class="module-card" onclick="app.loadModule('billing')"><div class="module-icon orange">💳</div><div class="module-content"><h3>বিলিং ও ইনভয়েস</h3><p>পেমেন্ট ব্যবস্থাপনা</p></div></div>
          <div class="module-card" onclick="app.loadModule('settings')"><div class="module-icon purple">⚙️</div><div class="module-content"><h3>সিস্টেম সেটিংস</h3><p>অ্যাপলিকেশন কনফিগারেশন</p></div></div>
        </div>
      </div>
    `;
  }

  renderUsers(container) {
    container.innerHTML = `
      <div class="table-container">
        <table class="table">
          <thead><tr><th>নাম</th><th>ইমেইল</th><th>ভুমিকা</th><th>স্ট্যাটাস</th><th>কাজ</th></tr></thead>
          <tbody>
            <tr><td><strong>আমিনুল ইসলাম</strong></td><td>aminul@example.com</td><td>অ্যাডমিন</td><td style="color:#10b981;">● সক্রিয়</td><td><button class="btn-action">সম্পাদনা</button></td></tr>
            <tr><td><strong>রাহিমা আখতার</strong></td><td>rahim@example.com</td><td>এডিটর</td><td style="color:#10b981;">● সক্রিয়</td><td><button class="btn-action">সম্পাদনা</button></td></tr>
            <tr><td><strong>করিম শেখ</strong></td><td>karim@example.com</td><td>ভিউয়ার</td><td style="color:#64748b;">● নিষ্ক্রিয়</td><td><button class="btn-action btn-danger">মুছে ফেলা</button></td></tr>
          </tbody>
        </table>
      </div>
    `;
  }

  renderReports(container) {
    container.innerHTML = `
      <div class="dashboard-stats">
        <div class="stat-card"><div class="stat-info"><div class="stat-label">এময়োস রিপোর্ট</div><div class="stat-value">24</div></div><div class="stat-icon primary">📈</div></div>
        <div class="stat-card"><div class="stat-info"><div class="stat-label">সপ্তাহিক রিপোর্ট</div><div class="stat-value">4</div></div><div class="stat-icon success">📅</div></div>
        <div class="stat-card"><div class="stat-info"><div class="stat-label">মাসিক রিপোর্ট</div><div class="stat-value">1</div></div><div class="stat-icon info">📋</div></div>
      </div>
    `;
  }

  renderBilling(container) {
    container.innerHTML = `
      <div class="dashboard-stats">
        <div class="stat-card"><div class="stat-info"><div class="stat-label">মোট আয়</div><div class="stat-value">৳ 1,25,000</div></div><div class="stat-icon success">💰</div></div>
        <div class="stat-card"><div class="stat-info"><div class="stat-label">বাকি পেমেন্ট</div><div class="stat-value">৳ 15,000</div></div><div class="stat-icon warning">⏳</div></div>
        <div class="stat-card"><div class="stat-info"><div class="stat-label">সক্রিয় ইনভয়েস</div><div class="stat-value">32</div></div><div class="stat-icon info">📄</div></div>
      </div>
    `;
  }

  renderSettings(container) {
    container.innerHTML = `
      <div class="form-group"><label class="form-label">অ্যাপলিকেশন নাম</label><input type="text" class="form-input" value="জলপ্রহরী"></div>
      <div class="form-group"><label class="form-label">ভাষা পছন্দ</label><select class="form-select"><option value="bn">বাংলা</option><option value="en">ইংরেজি</option></select></div>
      <div class="form-group"><label class="form-label">নোটিফিকেশন</label><select class="form-select"><option value="all">সব নোটিফিকেশন</option><option value="important">গুরুত্বপূর্ণ</option><option value="none">কোনোটিই নয়</option></select></div>
      <button class="btn-action" onclick="app.showToast('সেটিংস সংরক্ষণ করা হলো', 'success')">সংরক্ষণ করুন</button>
    `;
  }

  renderHelp(container) {
    container.innerHTML = `
      <div class="modules-grid">
        <div class="module-card"><div class="module-icon blue">❓</div><div class="module-content"><h3>সচরাচর জিজ্ঞাসা</h3><p>সাধারণ প্রশ্নের উত্তর</p></div></div>
        <div class="module-card"><div class="module-icon green">🎫</div><div class="module-content"><h3>সপোর্ট টিকিট</h3><p>নবীন টিকিট তৈরি করুন</p></div></div>
        <div class="module-card"><div class="module-icon purple">📖</div><div class="module-content"><h3>ডকুমেন্টেশন</h3><p>ব্যবহারকারী নির্দেশিকা</p></div></div>
      </div>
    `;
  }

  showToast(message, type = 'info') {
    const container = document.createElement('div');
    container.className = `toast ${type}`;
    container.innerHTML = `<span>${message}</span>`;
    const toastContainer = document.querySelector('.toast-container') || (() => { const c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); return c; })();
    toastContainer.appendChild(container);
    setTimeout(() => container.remove(), 4000);
  }

  logout() {
    if (confirm('লগআউট করতে চান?')) {
      localStorage.removeItem('jolprohori_user');
      window.location.href = 'index.html';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => { window.app = new DashboardApp(); });