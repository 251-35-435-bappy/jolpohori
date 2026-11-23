// ============================================================================
// Jolprohori UI - Main Application Controller (Complete)
// মডুলার আর্কিটেকচার - প্রতিটি মডিউল স্বাধীনভাবে কাজ করে
// ============================================================================

class JolprohoriApp {
  constructor() {
    this.i18n = window.i18n;
    this.currentModule = 'dashboard';
    this.isLoggedIn = false;
    this.user = {
      name: "আমিনুল ইসলাম",
      role: "অ্যাডমিন",
      avatar: "AI"
    };
    this.init();
  }

  init() {
    this.checkLoginStatus();
    this.setupLoginForm();
    this.setupGlobalEvents();
  }

  checkLoginStatus() {
    const savedUser = localStorage.getItem('jolprohori_user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.showApp();
    } else {
      this.showLogin();
    }
  }

  showLogin() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('main-app').style.display = 'none';
    this.isLoggedIn = false;
  }

  showApp() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';

  setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        this.i18n.setLang(lang);
        document.querySelectorAll('.lang-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
        if (this.isLoggedIn) {
          this.loadModule(this.currentModule);
        }
      });
    });
  }

  setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        const module = item.getAttribute('data-module');
        if (module) {
          this.loadModule(module);
        }
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.remove('open');
      });
    });
  }

  loadModule(moduleName) {
    this.currentModule = moduleName;
    this.showLoading(true);
    setTimeout(() => {
      this.renderModule(moduleName);
      this.showLoading(false);
      this.setupNavigation();
    }, 300);
  }

  renderModule(moduleName) {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) return;
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
      const titleKey = 'nav_' + moduleName;
      pageTitle.textContent = this.i18n.t(titleKey) || moduleName;
    }
    switch (moduleName) {
      case 'dashboard': this.renderDashboard(contentArea); break;
      case 'modules': this.renderModules(contentArea); break;
      case 'users': this.renderUsers(contentArea); break;
      case 'reports': this.renderReports(contentArea); break;
      case 'billing': this.renderBilling(contentArea); break;
      case 'settings': this.renderSettings(contentArea); break;
      case 'help': this.renderHelp(contentArea); break;
      default: this.renderDashboard(contentArea);
    }
  }
    this.isLoggedIn = true;
    document.getElementById('user-name').textContent = this.user.name;
    document.getElementById('user-role').textContent = this.user.role;

  renderDashboard(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2">
          <h1 class="font-bold text-2xl">${this.i18n.t('dashboard_welcome')}</h1>
          <p>${this.i18n.t('dashboard_subtitle')}</p>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">${this.i18n.t('stat_total_users')}</p>
                <h3 class="stat-value">1,245</h3>
              </div>
              <div class="stat-icon primary">👥</div>
            </div>
            <div class="stat-trend trend-up"><span>▲</span> 12% এই মাসে</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">${this.i18n.t('stat_active_modules')}</p>
                <h3 class="stat-value">9</h3>
              </div>
              <div class="stat-icon success">📦</div>
            </div>
            <div class="stat-trend trend-up"><span>▲</span> 2 নতুন মডিউল</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">${this.i18n.t('stat_reports')}</p>
                <h3 class="stat-value">45</h3>
              </div>
              <div class="stat-icon warning">📊</div>
            </div>
            <div class="stat-trend trend-down"><span>▼</span> 5% গত সপ্তাহের তুলনায়</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">${this.i18n.t('stat_system_health')}</p>
                <h3 class="stat-value">98%</h3>
              </div>
              <div class="stat-icon info">💚</div>
            </div>
            <div class="stat-trend trend-up"><span>▲</span> সবকিছু সুস্থ</div>
          </div>
        </div>
        <div class="modules-section">
          <div class="section-header">
            <h2 class="font-bold text-xl">${this.i18n.t('modules_title')}</h2>
            <p>${this.i18n.t('modules_subtitle')}</p>
          </div>
          <div class="modules-grid">
            <div class="module-card" onclick="app.loadModule('users')">
              <div class="module-icon blue">👤</div>
              <div class="module-content">
                <h3>${this.i18n.t('module_user_mgmt')}</h3>
                <p>${this.i18n.t('module_user_desc')}</p>
              </div>
            </div>
            <div class="module-card" onclick="app.loadModule('reports')">
              <div class="module-icon green">📊</div>
              <div class="module-content">
                <h3>${this.i18n.t('module_analytics')}</h3>
                <p>${this.i18n.t('module_analytics_desc')}</p>
              </div>
            </div>
            <div class="module-card" onclick="app.loadModule('billing')">
              <div class="module-icon orange">💳</div>
              <div class="module-content">
                <h3>${this.i18n.t('module_billing')}</h3>
                <p>${this.i18n.t('module_billing_desc')}</p>
              </div>
            </div>
            <div class="module-card" onclick="app.loadModule('settings')">
              <div class="module-icon purple">⚙️</div>
              <div class="module-content">
                <h3>${this.i18n.t('module_settings')}</h3>
                <p>${this.i18n.t('module_settings_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  renderUsers(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2 justify-between">
          <div>
            <h1 class="font-bold text-2xl">${this.i18n.t('module_user_mgmt')}</h1>
            <p>ব্যবহারকারীর প্রোফাইল এবং অ্যাক্সেস নিয়ন্ত্রণ ব্যবস্থাপনা করুন</p>
          </div>
          <button class="btn btn-primary" onclick="app.openUserModal()">+ ব্যবহারকারী যোগ করুন</button>
        </div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>নাম</th><th>ইমেইল</th><th>ভুমিকা</th><th>স্ট্যাটাস</th><th>কাজ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>আমিনুল ইসলাম</strong></td>
                <td>aminul@example.com</td>
                <td><span class="badge badge-secondary">অ্যাডমিন</span></td>
                <td><span class="badge badge-success">${this.i18n.t('status_active')}</span></td>
                <td>
                  <button class="btn btn-sm btn-outline" onclick="app.editUser(1)">সম্পাদনা</button>
                  <button class="btn btn-sm btn-danger" onclick="app.deleteUser(1)">মুছে ফেলা</button>
                </td>
              </tr>
              <tr>
                <td><strong>রাহিমা আখতার</strong></td>
                <td>rahim@example.com</td>
                <td><span class="badge badge-secondary">এডিটর</span></td>
                <td><span class="badge badge-success">${this.i18n.t('status_active')}</span></td>
                <td>
                  <button class="btn btn-sm btn-outline" onclick="app.editUser(2)">সম্পাদনা</button>
                  <button class="btn btn-sm btn-danger" onclick="app.deleteUser(2)">মুছে ফেলা</button>
                </td>
              </tr>
              <tr>
                <td><strong>করিম শেখ</strong></td>
                <td>karim@example.com</td>
                <td><span class="badge badge-secondary">ভিউয়ার</span></td>
                <td><span class="badge badge-secondary">${this.i18n.t('status_inactive')}</span></td>
                <td>
                  <button class="btn btn-sm btn-outline" onclick="app.editUser(3)">সম্পাদনা</button>
                  <button class="btn btn-sm btn-danger" onclick="app.deleteUser(3)">মুছে ফেলা</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  }
    document.getElementById('user-avatar').textContent = this.user.avatar;
    this.loadModule('dashboard');
  }

  setupLoginForm() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = form.elements[0].value;
      const password = form.elements[1].value;
      if (username && password) {
        this.user.name = username;
        this.user.role = "অ্যাডমিন";
        this.user.avatar = username.charAt(0).toUpperCase();
        localStorage.setItem('jolprohori_user', JSON.stringify(this.user));
        this.showToast('লগইন সফল হয়েছে!', 'success');
        setTimeout(() => this.showApp(), 800);
      }
    });
  }

  registerUser() {
    const name = prompt("নবীন ব্যবহারকারীর নাম লিখুন:");
    if (name) {
      this.user.name = name;
      this.user.role = "ব্যবহারকারী";
      this.user.avatar = name.charAt(0).toUpperCase();
      localStorage.setItem('jolprohori_user', JSON.stringify(this.user));
      this.showToast('অ্যাকাউন্ট তৈরি করা হলো! লগইন করুন', 'success');
    }
  }

  logout() {
    if (confirm('আপনি কি নিশ্চিত যে আপনি লগআউট করতে চান?')) {
      localStorage.removeItem('jolprohori_user');
      this.showToast('লগআউট সফল হয়েছে', 'info');
      setTimeout(() => { location.reload(); }, 1000);
    }
  }

  setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        this.i18n.setLang(lang);
        document.querySelectorAll('.lang-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
        if (this.isLoggedIn) {
          this.loadModule(this.currentModule);
        }
      });
    });
  }

  setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        const module = item.getAttribute('data-module');
        if (module) {
          this.loadModule(module);
        }
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.remove('open');
      });
    });
  }

  loadModule(moduleName) {
    this.currentModule = moduleName;

  renderDashboard(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2">
          <h1 class="font-bold text-2xl">${this.i18n.t('dashboard_welcome')}</h1>
          <p>${this.i18n.t('dashboard_subtitle')}</p>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">${this.i18n.t('stat_total_users')}</p>
                <h3 class="stat-value">1,245</h3>
              </div>
              <div class="stat-icon primary">👥</div>
            </div>
            <div class="stat-trend trend-up"><span>▲</span> 12% এই মাসে</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">${this.i18n.t('stat_active_modules')}</p>
                <h3 class="stat-value">9</h3>
              </div>
              <div class="stat-icon success">📦</div>
            </div>
            <div class="stat-trend trend-up"><span>▲</span> 2 নতুন মডিউল</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">${this.i18n.t('stat_reports')}</p>
                <h3 class="stat-value">45</h3>
              </div>
              <div class="stat-icon warning">📊</div>
            </div>
            <div class="stat-trend trend-down"><span>▼</span> 5% গত সপ্তাহের তুলনায়</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">${this.i18n.t('stat_system_health')}</p>
                <h3 class="stat-value">98%</h3>
              </div>
              <div class="stat-icon info">💚</div>
            </div>
            <div class="stat-trend trend-up"><span>▲</span> সবকিছু সুস্থ</div>
          </div>
        </div>
        <div class="modules-section">
          <div class="section-header">
            <h2 class="font-bold text-xl">${this.i18n.t('modules_title')}</h2>
            <p>${this.i18n.t('modules_subtitle')}</p>
          </div>
          <div class="modules-grid">
            <div class="module-card" onclick="app.loadModule('users')">
              <div class="module-icon blue">👤</div>
              <div class="module-content">
                <h3>${this.i18n.t('module_user_mgmt')}</h3>
                <p>${this.i18n.t('module_user_desc')}</p>
              </div>
            </div>
            <div class="module-card" onclick="app.loadModule('reports')">
              <div class="module-icon green">📊</div>
              <div class="module-content">
                <h3>${this.i18n.t('module_analytics')}</h3>
                <p>${this.i18n.t('module_analytics_desc')}</p>
              </div>
            </div>
            <div class="module-card" onclick="app.loadModule('billing')">
              <div class="module-icon orange">💳</div>
              <div class="module-content">
                <h3>${this.i18n.t('module_billing')}</h3>
                <p>${this.i18n.t('module_billing_desc')}</p>
              </div>
            </div>
            <div class="module-card" onclick="app.loadModule('settings')">
              <div class="module-icon purple">⚙️</div>
              <div class="module-content">
                <h3>${this.i18n.t('module_settings')}</h3>
                <p>${this.i18n.t('module_settings_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
    this.showLoading(true);
    setTimeout(() => {
      this.renderModule(moduleName);
      this.showLoading(false);
      this.setupNavigation();
    }, 300);
  }

  renderModule(moduleName) {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) return;
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
      const titleKey = 'nav_' + moduleName;
      pageTitle.textContent = this.i18n.t(titleKey) || moduleName;
    }
    switch (moduleName) {
      case 'dashboard': this.renderDashboard(contentArea); break;
      case 'modules': this.renderModules(contentArea); break;
      case 'users': this.renderUsers(contentArea); break;
      case 'reports': this.renderReports(contentArea); break;
      case 'billing': this.renderBilling(contentArea); break;
      case 'settings': this.renderSettings(contentArea); break;
      case 'help': this.renderHelp(contentArea); break;
      default: this.renderDashboard(contentArea);
    }
  }

  renderUsers(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2 justify-between">
          <div>
            <h1 class="font-bold text-2xl">${this.i18n.t('module_user_mgmt')}</h1>
            <p>ব্যবহারকারীর প্রোফাইল এবং অ্যাক্সেস নিয়ন্ত্রণ ব্যবস্থাপনা করুন</p>
          </div>
          <button class="btn btn-primary" onclick="app.openUserModal()">+ ব্যবহারকারী যোগ করুন</button>
        </div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>নাম</th><th>ইমেইল</th><th>ভুমিকা</th><th>স্ট্যাটাস</th><th>কাজ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>আমিনুল ইসলাম</strong></td>
                <td>aminul@example.com</td>
                <td><span class="badge badge-secondary">অ্যাডমিন</span></td>
                <td><span class="badge badge-success">${this.i18n.t('status_active')}</span></td>
                <td>
                  <button class="btn btn-sm btn-outline" onclick="app.editUser(1)">সম্পাদনা</button>
                  <button class="btn btn-sm btn-danger" onclick="app.deleteUser(1)">মুছে ফেলা</button>
                </td>
              </tr>
              <tr>
                <td><strong>রাহিমা আখতার</strong></td>
                <td>rahim@example.com</td>
                <td><span class="badge badge-secondary">এডিটর</span></td>
                <td><span class="badge badge-success">${this.i18n.t('status_active')}</span></td>
                <td>
                  <button class="btn btn-sm btn-outline" onclick="app.editUser(2)">সম্পাদনা</button>
                  <button class="btn btn-sm btn-danger" onclick="app.deleteUser(2)">মুছে ফেলা</button>
                </td>
              </tr>
              <tr>
                <td><strong>করিম শেখ</strong></td>
                <td>karim@example.com</td>
                <td><span class="badge badge-secondary">ভিউয়ার</span></td>
                <td><span class="badge badge-secondary">${this.i18n.t('status_inactive')}</span></td>
                <td>
                  <button class="btn btn-sm btn-outline" onclick="app.editUser(3)">সম্পাদনা</button>
                  <button class="btn btn-sm btn-danger" onclick="app.deleteUser(3)">মুছে ফেলা</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderReports(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2 justify-between">
          <div>
            <h1 class="font-bold text-2xl">${this.i18n.t('nav_reports')}</h1>
            <p>তথ্য বিশ্লেষণ এবং রিপোর্ট তৈরি করুন</p>
          </div>
          <button class="btn btn-primary">রিপোর্ট আমদানি/রপ্তানি</button>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-header">
              <div><p class="stat-label">এময়োস রিপোর্ট</p><h3 class="stat-value">24</h3></div>
              <div class="stat-icon blue">📈</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div><p class="stat-label">সপ্তাহিক রিপোর্ট</p><h3 class="stat-value">4</h3></div>
              <div class="stat-icon green">📅</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div><p class="stat-label">মাসিক রিপোর্ট</p><h3 class="stat-value">1</h3></div>
              <div class="stat-icon purple">📋</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderBilling(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2 justify-between">
          <div>
            <h1 class="font-bold text-2xl">${this.i18n.t('module_billing')}</h1>
            <p>পেমেন্ট এবং ইনভয়েস ব্যবস্থাপনা করুন</p>
          </div>
          <button class="btn btn-primary">নবীন ইনভয়েস তৈরি করুন</button>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">মোট আয়</p>
                <h3 class="stat-value">৳ 1,25,000</h3>
              </div>
              <div class="stat-icon success">💰</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">বাকি পেমেন্ট</p>
                <h3 class="stat-value">৳ 15,000</h3>
              </div>
              <div class="stat-icon warning">⏳</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-header">
              <div>
                <p class="stat-label">সক্রিয় ইনভয়েস</p>
                <h3 class="stat-value">32</h3>
              </div>
              <div class="stat-icon info">📄</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderSettings(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2">
          <h1 class="font-bold text-2xl">${this.i18n.t('nav_settings')}</h1>
          <p>অ্যাপলিকেশন কনফিগারেশন এবং পছন্দ সেটিংস</p>
        </div>
        <div class="form-group">
          <label class="form-label">অ্যাপলিকেশন নাম</label>
          <input type="text" class="form-input" value="জলপ্রহরী">
        </div>
        <div class="form-group">
          <label class="form-label">ভাষা পছন্দ</label>
          <select class="form-select">
            <option value="bn">বাংলা</option>
            <option value="en">ইংরেজি</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">নোটিফিকেশন</label>
          <select class="form-select">
            <option value="all">সব নোটিফিকেশন</option>
            <option value="important">শুধুমাত্র গুরুত্বপূর্ণ</option>
            <option value="none">কোনোটিই নয়</option>
          </select>
        </div>
        <button class="btn btn-primary" onclick="app.saveSettings()">সেটিংস সংরক্ষণ করুন</button>
      </div>
    `;
  }

  renderHelp(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2">
          <h1 class="font-bold text-2xl">${this.i18n.t('nav_help')}</h1>
          <p>সহায়তা কেন্দ্র এবং টিকিট ব্যবস্থাপনা</p>
        </div>
        <div class="modules-grid">
          <div class="module-card">
            <div class="module-icon blue">❓</div>
            <div class="module-content">
              <h3>সচরাচর জিজ্ঞাসা (FAQ)</h3>
              <p>সাধারণ প্রশ্নের উত্তর পান</p>
            </div>
          </div>
          <div class="module-card">
            <div class="module-icon green">🎫</div>
            <div class="module-content">
              <h3>সপোর্ট টিকিট</h3>
              <p>নবীন সাপোর্ট টিকিট তৈরি করুন</p>
            </div>
          </div>
          <div class="module-card">
            <div class="module-icon purple">📖</div>
            <div class="module-content">
              <h3>ডকুমেন্টেশন</h3>
              <p>উপयोगকারী নির্দেশিকা পড়ুন</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderModules(container) {
    container.innerHTML = `
      <div class="dashboard">
        <div class="section-header mb-2">
          <h1 class="font-bold text-2xl">${this.i18n.t('modules_title')}</h1>
          <p>${this.i18n.t('modules_subtitle')}</p>
        </div>
        <div class="modules-grid">
          <div class="module-card" onclick="app.loadModule('users')">
            <div class="module-icon blue">👥</div>
            <div class="module-content">
              <h3>${this.i18n.t('module_user_mgmt')}</h3>
              <p>${this.i18n.t('module_user_desc')}</p>
              <button class="btn btn-sm btn-primary mt-2">খুলুন</button>
            </div>
          </div>
          <div class="module-card" onclick="app.loadModule('reports')">
            <div class="module-icon green">📊</div>
            <div class="module-content">
              <h3>${this.i18n.t('module_analytics')}</h3>
              <p>${this.i18n.t('module_analytics_desc')}</p>
              <button class="btn btn-sm btn-primary mt-2">খুলুন</button>
            </div>
          </div>
          <div class="module-card" onclick="app.loadModule('billing')">
            <div class="module-icon orange">💳</div>
            <div class="module-content">
              <h3>${this.i18n.t('module_billing')}</h3>
              <p>${this.i18n.t('module_billing_desc')}</p>
              <button class="btn btn-sm btn-primary mt-2">খুলুন</button>
            </div>
          </div>
          <div class="module-card" onclick="app.loadModule('settings')">
            <div class="module-icon purple">⚙️</div>
            <div class="module-content">
              <h3>${this.i18n.t('module_settings')}</h3>
              <p>${this.i18n.t('module_settings_desc')}</p>
              <button class="btn btn-sm btn-primary mt-2">খুলুন</button>
            </div>
          </div>
          <div class="module-card" onclick="app.loadModule('help')">
            <div class="module-icon teal">❓</div>
            <div class="module-content">
              <h3>${this.i18n.t('module_support')}</h3>
              <p>${this.i18n.t('module_support_desc')}</p>
              <button class="btn btn-sm btn-primary mt-2">খুলুন</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  openUserModal() {
    const modal = document.getElementById('user-modal');
    if (modal) {
      modal.classList.add('show');
    } else {
      this.createUserModal();
    }
  }

  createUserModal() {
    const modalHTML = `
      <div class="modal" id="user-modal">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">নবীন ব্যবহারকারী যোগ করুন</h3>
            <button class="modal-close" onclick="app.closeModal('user-modal')">&times;</button>
          </div>
          <div class="modal-body">
            <form id="user-form">
              <div class="form-group">
                <label class="form-label">নাম</label>
                <input type="text" class="form-input" placeholder="নাম লিখুন" required>
              </div>
              <div class="form-group">
                <label class="form-label">ইমেইল</label>
                <input type="email" class="form-input" placeholder="ইমেইল লিখুন" required>
              </div>
              <div class="form-group">
                <label class="form-label">ভুমিকা</label>
                <select class="form-select">
                  <option value="admin">অ্যাডমিন</option>
                  <option value="editor">এডিটর</option>
                  <option value="viewer">ভিউয়ার</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="app.closeModal('user-modal')">বাতিল</button>
            <button class="btn btn-primary" onclick="app.saveUser()">সংরক্ষণ করুন</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.getElementById('user-modal').classList.add('show');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('show');
  }

  saveUser() {
    const form = document.getElementById('user-form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    if (!nameInput.value || !emailInput.value) {
      this.showToast('দয়া করে সব ফিল্ড পূরণ করুন', 'error');
      return;
    }
    this.showToast('ব্যবহারকারী সফলভাবে সংরক্ষণ করা হলো', 'success');
    this.closeModal('user-modal');
    this.loadModule('users');
  }

  editUser(id) {
    this.showToast('ব্যবহারকারী #' + id + ' সম্পাদনা করুন', 'info');
  }

  deleteUser(id) {
    if (confirm('আপনি কি নিশ্চিত যে আপনি এই ব্যবহারকারীটি মুছতে চান?')) {
      this.showToast('ব্যবহারকারী #' + id + ' মুছে ফেলা হলো', 'success');
      this.loadModule('users');
    }
  }

  saveSettings() {
    this.showToast('সেটিংস সফলভাবে সংরক্ষণ করা হলো', 'success');
  }

  showToast(message, type = 'info') {
    const existing = document.querySelector('.toast-container');
    if (existing) existing.remove();
    const container = document.createElement('div');
    container.className = 'toast-container';
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    document.body.appendChild(container);
    setTimeout(() => { container.remove(); }, 4000);
  }

  showLoading(show) {
    let overlay = document.getElementById('loading-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'loading-overlay';
      overlay.className = 'loading-overlay';
      overlay.innerHTML = `
        <div class="spinner"></div>
        <span>${this.i18n.t('common_loading')}</span>
      `;
      document.body.appendChild(overlay);
    }
    overlay.classList.toggle('show', show);
  }

  setupGlobalEvents() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new JolprohoriApp();
});