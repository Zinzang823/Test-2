/**
 * Golden Spoon Restaurant - Table Booking System
 * Main JavaScript Application File
 */

// Initial Seed Data
const DEFAULT_MENU = [
    {
        id: "m1",
        name: "Sườn Bò Wagyu Dát Vàng",
        category: "main",
        price: 1850000,
        description: "Bít tết bò Wagyu thượng hạng nướng đá nóng, trang trí lá vàng 24k, tỏi đen cô đơn và sốt vang đỏ đặc chế.",
        image: "assets/images/steak.png",
        featured: true
    },
    {
        id: "m2",
        name: "Mỳ Ý Truffle Sốt Kem",
        category: "main",
        price: 890000,
        description: "Mỳ Ý làm thủ công quyện sốt kem nấm Truffle đen quý hiếm, phô mai Parmesan 24 tháng tuổi và lá mầm.",
        image: "assets/images/pasta.png",
        featured: true
    },
    {
        id: "m3",
        name: "Cá Hồi Tartare Trứng Cá Tầm",
        category: "appetizer",
        price: 650000,
        description: "Cá hồi Na-uy thái hạt lựu ướp bơ sáp, nước cốt chanh Caviar, trứng cá tầm đen và hoa ăn được.",
        image: "assets/images/salmon.png",
        featured: true
    },
    {
        id: "m4",
        name: "Bánh Chocolate Lava Hoàng Kim",
        category: "dessert",
        price: 350000,
        description: "Bánh sô-cô-la Bỉ tan chảy nhân hoàng kim, dùng kèm kem vanilla Pháp Bourbon và dâu tây hữu cơ.",
        image: "assets/images/lava_cake.png",
        featured: true
    },
    {
        id: "m5",
        name: "Súp Sò Điệp Hokkaido & Nghệ Tây",
        category: "appetizer",
        price: 480000,
        description: "Sò điệp áp chảo sốt kem nhụy hoa nghệ tây (Saffron) thượng hạng và bánh mì nướng tỏi.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        featured: false
    },
    {
        id: "m6",
        name: "Rượu Vang Đỏ Chateau Margaux",
        category: "drink",
        price: 3200000,
        description: "Dòng rượu vang đỏ cao cấp nhập khẩu nguyên chai từ vùng Bordeaux Pháp, hương vị nồng nàn quyến rũ.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        featured: false
    },
    {
        id: "m7",
        name: "Mocktail Gold Passion",
        category: "drink",
        price: 180000,
        description: "Sự kết hợp hoàn hảo giữa chanh leo rừng, nước ép dứa, siro thảo mộc và bột vàng thực phẩm lấp lánh.",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        featured: false
    },
    {
        id: "m8",
        name: "Tarte Tatin Táo & Caramel Muối",
        category: "dessert",
        price: 280000,
        description: "Bánh tart táo kiểu Pháp truyền thống nướng caramel, rưới sốt bơ mặn và kem tươi béo ngậy.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        featured: false
    }
];

const DEFAULT_REVIEWS = [
    {
        id: "r1",
        name: "Nguyễn Hoàng Nam",
        rating: 5,
        comment: "Không gian nhà hàng vô cùng sang trọng, ấm cúng. Món bò Wagyu mềm tan trong miệng, cực kỳ đáng tiền! Nhân viên phục vụ chu đáo, nhiệt tình.",
        date: "2026-06-10"
    },
    {
        id: "r2",
        name: "Trần Thị Lan Anh",
        rating: 5,
        comment: "Mỳ Ý sốt kem Truffle thơm phức, sợi mỳ tươi ngon. Tôi rất thích sơ đồ đặt bàn trực quan trên web, giúp chọn đúng bàn view cửa kính lung linh.",
        date: "2026-06-12"
    },
    {
        id: "r3",
        name: "Phạm Minh Đức",
        rating: 4,
        comment: "Đồ ăn ngon, bày biện đẹp mắt như một tác phẩm nghệ thuật. Đặt bàn trước nên đến là có bàn ngay. Sẽ quay lại cùng gia đình.",
        date: "2026-06-14"
    },
    {
        id: "r4",
        name: "Lê Thanh Thảo",
        rating: 5,
        comment: "Một trong những nhà hàng Fine Dining xuất sắc nhất Hà Nội. Món cá hồi tartare cực kỳ tươi mát, decor siêu xinh để checkin.",
        date: "2026-06-15"
    },
    {
        id: "r5",
        name: "Vũ Minh Tuấn",
        rating: 4,
        comment: "Rượu vang ngon, không gian lãng mạn thích hợp cho các cặp đôi. Điểm cộng là nhân viên phục vụ rất am hiểu về ẩm thực để tư vấn.",
        date: "2026-06-17"
    },
    {
        id: "r6",
        name: "Hoàng Khánh Vy",
        rating: 5,
        comment: "Bánh Lava sô-cô-la chảy siêu ngon, ngọt ngào nhưng không bị ngấy. Quy trình đăng ký tài khoản và đặt bàn trên web cực kỳ nhanh gọn.",
        date: "2026-06-18"
    }
];

const DEFAULT_USERS = [
    {
        username: "admin",
        password: "123",
        name: "Nhà Hàng Golden Spoon",
        phone: "0123456789",
        role: "admin"
    },
    {
        username: "customer1",
        password: "123",
        name: "Lê Văn Khách",
        phone: "0987654321",
        role: "customer"
    }
];

// Initial bookings database
const DEFAULT_BOOKINGS = [
    {
        id: "b1",
        userId: "customer1",
        name: "Lê Văn Khách",
        phone: "0987654321",
        date: new Date().toISOString().split('T')[0], // Today
        timeSlot: "dinner", // dinner
        tableNum: 5,
        guests: 4,
        status: "completed", // Đã hoàn thành (để khách hàng này test viết đánh giá)
        notes: "Kỷ niệm ngày cưới, muốn bàn view đẹp."
    },
    {
        id: "b2",
        userId: "customer1",
        name: "Lê Văn Khách",
        phone: "0987654321",
        date: new Date().toISOString().split('T')[0], // Today
        timeSlot: "dinner",
        tableNum: 12,
        guests: 2,
        status: "confirmed", // Đã xác nhận
        notes: "Không ăn được hành."
    }
];

class GoldenSpoonApp {
    constructor() {
        this.initStorage();
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;
        
        // Navigation state
        this.currentView = 'home';
        
        // Form states
        this.selectedTable = null;
        
        this.initDOM();
        this.initEvents();
        this.renderAll();
    }

    initStorage() {
        if (!localStorage.getItem('gs_menu')) {
            localStorage.setItem('gs_menu', JSON.stringify(DEFAULT_MENU));
        }
        if (!localStorage.getItem('gs_users')) {
            localStorage.setItem('gs_users', JSON.stringify(DEFAULT_USERS));
        }
        if (!localStorage.getItem('gs_bookings')) {
            localStorage.setItem('gs_bookings', JSON.stringify(DEFAULT_BOOKINGS));
        }
        if (!localStorage.getItem('gs_reviews')) {
            localStorage.setItem('gs_reviews', JSON.stringify(DEFAULT_REVIEWS));
        }
    }

    // Getters for localStorage data
    getMenu() { return JSON.parse(localStorage.getItem('gs_menu')); }
    getUsers() { return JSON.parse(localStorage.getItem('gs_users')); }
    getBookings() { return JSON.parse(localStorage.getItem('gs_bookings')); }
    getReviews() { return JSON.parse(localStorage.getItem('gs_reviews')); }

    // Setters for localStorage data
    setMenu(data) { localStorage.setItem('gs_menu', JSON.stringify(data)); }
    setUsers(data) { localStorage.setItem('gs_users', JSON.stringify(data)); }
    setBookings(data) { localStorage.setItem('gs_bookings', JSON.stringify(data)); }
    setReviews(data) { localStorage.setItem('gs_reviews', JSON.stringify(data)); }

    initDOM() {
        // Views
        this.views = {
            home: document.getElementById('view-home'),
            menu: document.getElementById('view-menu'),
            booking: document.getElementById('view-booking'),
            admin: document.getElementById('view-admin')
        };

        // Navigation links
        this.navLinks = document.querySelectorAll('.nav-link');
        
        // Auth buttons and display
        this.authBtnContainer = document.getElementById('auth-buttons');
        this.userProfileContainer = document.getElementById('user-profile-header');
        this.displayUserName = document.getElementById('display-user-name');
        
        // Modals
        this.loginModal = document.getElementById('login-modal');
        this.registerModal = document.getElementById('register-modal');
        this.reviewModal = document.getElementById('review-modal');

        // Form elements
        this.bookingForm = document.getElementById('form-booking');
        this.bookingDate = document.getElementById('booking-date');
        this.bookingTimeSlot = document.getElementById('booking-timeslot');
        this.bookingGuests = document.getElementById('booking-guests');
        this.tableMapContainer = document.getElementById('table-map');
        this.selectedTableText = document.getElementById('selected-table-info');
        this.bookingWarning = document.getElementById('booking-warning');
        this.btnSubmitBooking = document.getElementById('btn-submit-booking');

        // Initial set today's date to date picker
        const today = new Date().toISOString().split('T')[0];
        this.bookingDate.value = today;
        this.bookingDate.min = today;
    }

    initEvents() {
        // Navigation clicks
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const view = link.getAttribute('data-view');
                if (view === 'admin' && (!this.currentUser || this.currentUser.role !== 'admin')) {
                    this.showNotification('Bạn cần đăng nhập bằng tài khoản Admin để truy cập.', 'error');
                    this.openModal(this.loginModal);
                    return;
                }
                this.switchView(view);
            });
        });

        // Booking inputs (refresh tables map)
        this.bookingDate.addEventListener('change', () => this.updateTableLayout());
        this.bookingTimeSlot.addEventListener('change', () => this.updateTableLayout());

        // Modals closing on clicking overlays or close buttons
        document.querySelectorAll('.modal-overlay, .btn-close-modal').forEach(el => {
            el.addEventListener('click', () => {
                this.closeAllModals();
            });
        });

        // Auth form submissions
        document.getElementById('form-login').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('form-register').addEventListener('submit', (e) => this.handleRegister(e));
        document.getElementById('form-review').addEventListener('submit', (e) => this.handleReviewSubmit(e));
        
        // Booking form submission
        this.bookingForm.addEventListener('submit', (e) => this.handleBookingSubmit(e));

        // Logout click
        document.getElementById('btn-logout').addEventListener('click', () => this.handleLogout());

        // Review star rating click
        const stars = document.querySelectorAll('.star-rating-input i');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                document.getElementById('review-rating-value').value = rating;
                stars.forEach((s, idx) => {
                    if (idx < rating) {
                        s.classList.replace('bx-star', 'bxs-star');
                        s.classList.add('active');
                    } else {
                        s.classList.replace('bxs-star', 'bx-star');
                        s.classList.remove('active');
                    }
                });
            });
        });

        // Menu category filtering
        document.querySelectorAll('.menu-category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.menu-category-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderMenuSection();
            });
        });

        // Menu search
        document.getElementById('menu-search').addEventListener('input', () => {
            this.renderMenuSection();
        });
    }

    switchView(viewName) {
        this.currentView = viewName;
        
        // Update URL hash
        window.location.hash = viewName;

        // Toggle active views
        Object.keys(this.views).forEach(key => {
            if (key === viewName) {
                this.views[key].classList.add('active');
            } else {
                this.views[key].classList.remove('active');
            }
        });

        // Update nav styling
        this.navLinks.forEach(link => {
            if (link.getAttribute('data-view') === viewName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // View specific renders
        if (viewName === 'admin') {
            this.renderAdminSection();
        } else if (viewName === 'booking') {
            this.updateTableLayout();
            // Auto-fill customer info if logged in
            if (this.currentUser && this.currentUser.role !== 'admin') {
                const nameField = document.getElementById('booking-cust-name');
                const phoneField = document.getElementById('booking-cust-phone');
                if (nameField && !nameField.value) nameField.value = this.currentUser.name;
                if (phoneField && !phoneField.value) phoneField.value = this.currentUser.phone;
            }
        } else if (viewName === 'home') {
            this.renderHomeReviews();
            this.updateReviewButtonState();
        }
    }

    renderAll() {
        // Sync path hash with view
        const hash = window.location.hash.replace('#', '');
        if (hash && this.views[hash]) {
            this.switchView(hash);
        } else {
            this.switchView('home');
        }

        this.updateAuthHeader();
        this.renderHomeReviews();
        this.renderMenuSection();
    }

    // --- AUTHENTICATION LOGIC ---

    openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
        document.body.style.overflow = 'auto';
    }

    updateAuthHeader() {
        if (this.currentUser) {
            this.authBtnContainer.style.display = 'none';
            this.userProfileContainer.style.display = 'flex';
            this.displayUserName.textContent = this.currentUser.name;
            
            // Show Admin Nav Link if role is admin
            const adminNavLink = document.querySelector('.nav-link[data-view="admin"]');
            if (this.currentUser.role === 'admin') {
                adminNavLink.style.display = 'block';
            } else {
                adminNavLink.style.display = 'none';
            }
        } else {
            this.authBtnContainer.style.display = 'flex';
            this.userProfileContainer.style.display = 'none';
            document.querySelector('.nav-link[data-view="admin"]').style.display = 'none';
        }
        this.updateReviewButtonState();
    }

    handleLogin(e) {
        e.preventDefault();
        const username = e.target.username.value.trim();
        const password = e.target.password.value;

        if (!username || !password) {
            this.showNotification('Vui lòng điền đầy đủ thông tin.', 'error');
            return;
        }

        const users = this.getUsers();
        const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

        if (user) {
            this.currentUser = user;
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            this.showNotification(`Chào mừng ${user.name} quay lại!`, 'success');
            this.closeAllModals();
            this.updateAuthHeader();
            e.target.reset();

            // Redirect admin to admin panel
            if (user.role === 'admin') {
                this.switchView('admin');
            } else {
                this.switchView('home');
            }
        } else {
            this.showNotification('Tên đăng nhập hoặc mật khẩu không chính xác.', 'error');
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const name = e.target.regName.value.trim();
        const phone = e.target.regPhone.value.trim();
        const username = e.target.regUsername.value.trim().toLowerCase();
        const password = e.target.regPassword.value;
        const confirmPassword = e.target.regConfirmPassword.value;

        if (!name || !phone || !username || !password) {
            this.showNotification('Vui lòng điền đầy đủ các trường thông tin.', 'error');
            return;
        }

        // Phone number validation (basic)
        if (!/^[0-9]{9,11}$/.test(phone)) {
            this.showNotification('Số điện thoại không hợp lệ (9 - 11 chữ số).', 'error');
            return;
        }

        if (password !== confirmPassword) {
            this.showNotification('Mật khẩu xác nhận không khớp.', 'error');
            return;
        }

        const users = this.getUsers();
        if (users.some(u => u.username === username)) {
            this.showNotification('Tên đăng nhập đã tồn tại trên hệ thống.', 'error');
            return;
        }

        const newUser = {
            username,
            password,
            name,
            phone,
            role: "customer"
        };

        users.push(newUser);
        this.setUsers(users);

        this.showNotification('Đăng ký tài khoản thành công! Hãy đăng nhập.', 'success');
        e.target.reset();
        
        // Switch modal from Register to Login
        this.closeAllModals();
        setTimeout(() => {
            this.openModal(this.loginModal);
        }, 300);
    }

    handleLogout() {
        this.currentUser = null;
        sessionStorage.removeItem('currentUser');
        this.showNotification('Đăng xuất thành công.', 'success');
        this.updateAuthHeader();
        this.switchView('home');
    }

    // --- MENU SYSTEM ---

    renderMenuSection() {
        const menuContainer = document.getElementById('menu-items-grid');
        if (!menuContainer) return;

        const menu = this.getMenu();
        const activeCategory = document.querySelector('.menu-category-btn.active').getAttribute('data-category');
        const searchQuery = document.getElementById('menu-search').value.trim().toLowerCase();

        // Filter items
        let filteredMenu = menu;
        if (activeCategory !== 'all') {
            filteredMenu = filteredMenu.filter(item => item.category === activeCategory);
        }
        if (searchQuery) {
            filteredMenu = filteredMenu.filter(item => 
                item.name.toLowerCase().includes(searchQuery) || 
                item.description.toLowerCase().includes(searchQuery)
            );
        }

        // Render
        if (filteredMenu.length === 0) {
            menuContainer.innerHTML = `
                <div class="no-results">
                    <i class="bx bx-search-alt"></i>
                    <p>Không tìm thấy món ăn nào phù hợp với yêu cầu của bạn.</p>
                </div>
            `;
            return;
        }

        menuContainer.innerHTML = filteredMenu.map(item => `
            <div class="menu-item-card" data-aos="fade-up">
                <div class="menu-item-img-container">
                    <img src="${item.image}" alt="${item.name}" class="menu-item-img" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'">
                    ${item.featured ? '<span class="menu-item-badge">Bán chạy</span>' : ''}
                </div>
                <div class="menu-item-info">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <span class="menu-item-price">${this.formatPrice(item.price)}</span>
                    </div>
                    <p class="menu-item-desc">${item.description}</p>
                    <button class="btn btn-gold-outline btn-sm btn-order-direct" onclick="app.switchView('booking');">Đăng Ký Đặt Bàn Ăn</button>
                </div>
            </div>
        `).join('');
    }

    formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    }

    // --- BOOKING SYSTEM ---

    updateTableLayout() {
        const date = this.bookingDate.value;
        const timeSlot = this.bookingTimeSlot.value;

        if (!date || !timeSlot) return;

        // Reset selected table
        this.selectedTable = null;
        this.selectedTableText.innerHTML = `Vui lòng chọn 1 bàn trong sơ đồ 20 bàn phía trên.`;
        this.btnSubmitBooking.disabled = true;

        const bookings = this.getBookings();
        // Filter bookings for this date and time slot (ignore cancelled ones)
        const activeBookings = bookings.filter(b => b.date === date && b.timeSlot === timeSlot && b.status !== 'cancelled');
        const bookedTableNumbers = activeBookings.map(b => b.tableNum);

        // Render 20 tables layout
        this.tableMapContainer.innerHTML = '';
        for (let i = 1; i <= 20; i++) {
            const isBooked = bookedTableNumbers.includes(i);
            const tableDiv = document.createElement('div');
            tableDiv.className = `table-box ${isBooked ? 'booked' : 'available'}`;
            tableDiv.innerHTML = `
                <div class="table-num">${i}</div>
                <div class="table-label">${isBooked ? 'Đã đặt' : 'Bàn trống'}</div>
                <div class="table-chairs">
                    <span></span><span></span><span></span><span></span>
                </div>
            `;

            if (!isBooked) {
                tableDiv.addEventListener('click', () => this.selectTable(i, tableDiv));
            }
            this.tableMapContainer.appendChild(tableDiv);
        }

        // Check if all 20 tables are booked
        const totalBooked = bookedTableNumbers.length;
        const availableTables = 20 - totalBooked;

        const occupancyText = document.getElementById('occupancy-info');
        occupancyText.innerHTML = `Bàn trống: <strong class="text-gold">${availableTables}/20</strong> bàn (Đã đặt: ${totalBooked} bàn)`;

        if (availableTables <= 0) {
            this.bookingWarning.style.display = 'block';
            this.bookingWarning.querySelector('span').textContent = 'CẢNH BÁO: Khung giờ và ngày này hiện đã HẾT BÀN TRỐNG (20/20 bàn đã được đặt). Vui lòng chọn ngày hoặc khung giờ khác!';
            this.selectedTableText.innerHTML = `<span class="text-error">Không thể chọn bàn do hết chỗ!</span>`;
            this.btnSubmitBooking.disabled = true;
        } else {
            this.bookingWarning.style.display = 'none';
        }
    }

    selectTable(tableNum, element) {
        // Deselect previous
        document.querySelectorAll('.table-box.selected').forEach(el => {
            el.classList.remove('selected');
        });

        this.selectedTable = tableNum;
        element.classList.add('selected');

        this.selectedTableText.innerHTML = `Bạn đang chọn: <strong class="text-gold">BÀN SỐ ${tableNum}</strong>`;
        this.btnSubmitBooking.disabled = false;
    }

    handleBookingSubmit(e) {
        e.preventDefault();

        // Check if user is logged in
        if (!this.currentUser) {
            this.showNotification('Vui lòng ĐĂNG NHẬP tài khoản trước khi đặt bàn.', 'error');
            this.openModal(this.loginModal);
            return;
        }

        const date = this.bookingDate.value;
        const timeSlot = this.bookingTimeSlot.value;
        const guests = parseInt(this.bookingGuests.value);
        const customerName = e.target.custName.value.trim();
        const customerPhone = e.target.custPhone.value.trim();
        const notes = e.target.bookingNotes.value.trim();

        if (!customerName || !customerPhone || !this.selectedTable) {
            this.showNotification('Vui lòng nhập đầy đủ thông tin liên hệ và chọn bàn.', 'error');
            return;
        }

        // Double check booking limits
        const bookings = this.getBookings();
        const activeBookings = bookings.filter(b => b.date === date && b.timeSlot === timeSlot && b.status !== 'cancelled');
        if (activeBookings.length >= 20) {
            this.showNotification('Xin lỗi, khung giờ này vừa mới được đặt hết bàn. Vui lòng chọn khung giờ khác!', 'error');
            this.updateTableLayout();
            return;
        }

        if (activeBookings.some(b => b.tableNum === this.selectedTable)) {
            this.showNotification(`Bàn số ${this.selectedTable} đã được người khác đặt trước một bước. Vui lòng chọn bàn khác!`, 'error');
            this.updateTableLayout();
            return;
        }

        const newBooking = {
            id: 'b_' + Date.now(),
            userId: this.currentUser.role === 'admin' ? 'admin' : this.currentUser.username,
            name: customerName,
            phone: customerPhone,
            date,
            timeSlot,
            tableNum: this.selectedTable,
            guests,
            status: 'pending', // Waiting approval from admin
            notes
        };

        bookings.push(newBooking);
        this.setBookings(bookings);

        this.showNotification(`Đặt bàn số ${this.selectedTable} thành công! Trạng thái đang chờ Admin duyệt.`, 'success');
        e.target.reset();
        
        // Reset state & layout
        this.selectedTable = null;
        
        // Auto fill form with user details again
        if (this.currentUser && this.currentUser.role !== 'admin') {
            document.getElementById('booking-cust-name').value = this.currentUser.name;
            document.getElementById('booking-cust-phone').value = this.currentUser.phone;
        }
        
        this.updateTableLayout();
    }

    // --- REVIEWS SYSTEM ---

    renderHomeReviews() {
        const reviewsContainer = document.getElementById('reviews-list-container');
        if (!reviewsContainer) return;

        const reviews = this.getReviews();
        // Display latest reviews (about 5-8 items as requested)
        const latestReviews = [...reviews].reverse().slice(0, 8);

        if (latestReviews.length === 0) {
            reviewsContainer.innerHTML = `<p class="no-reviews">Chưa có đánh giá nào. Hãy là người đầu tiên!</p>`;
            return;
        }

        reviewsContainer.innerHTML = latestReviews.map(rev => `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-user-icon">
                        <i class="bx bxs-user-circle"></i>
                    </div>
                    <div class="review-user-info">
                        <h4 class="review-author">${rev.name}</h4>
                        <span class="review-date">${rev.date}</span>
                    </div>
                    <div class="review-rating">
                        ${this.generateStarHTML(rev.rating)}
                    </div>
                </div>
                <p class="review-comment">"${rev.comment}"</p>
            </div>
        `).join('');
    }

    generateStarHTML(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += '<i class="bx bxs-star text-gold"></i>';
            } else {
                starsHTML += '<i class="bx bx-star text-muted"></i>';
            }
        }
        return starsHTML;
    }

    updateReviewButtonState() {
        const reviewBtnContainer = document.getElementById('review-action-container');
        if (!reviewBtnContainer) return;

        if (!this.currentUser) {
            reviewBtnContainer.innerHTML = `
                <p class="text-muted text-center">
                    Bạn muốn để lại đánh giá? <a href="#" id="link-login-review" class="text-gold">Đăng nhập ngay</a> (Bạn cần hoàn thành ít nhất 1 đơn đặt bàn để đánh giá).
                </p>
            `;
            document.getElementById('link-login-review').addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal(this.loginModal);
            });
            return;
        }

        if (this.currentUser.role === 'admin') {
            reviewBtnContainer.innerHTML = `
                <p class="text-gold text-center font-italic">Tài khoản quản trị viên không thể tạo đánh giá ẩm thực.</p>
            `;
            return;
        }

        // Check if current user has a COMPLETED booking
        const bookings = this.getBookings();
        const hasCompletedBooking = bookings.some(b => b.userId === this.currentUser.username && b.status === 'completed');

        if (hasCompletedBooking) {
            reviewBtnContainer.innerHTML = `
                <div class="text-center">
                    <p class="text-success mb-3"><i class="bx bx-check-circle"></i> Tài khoản của bạn đủ điều kiện đánh giá (Đã từng trải nghiệm ẩm thực tại nhà hàng).</p>
                    <button class="btn btn-gold" id="btn-open-review-modal">
                        <i class="bx bx-edit"></i> Viết đánh giá của bạn
                    </button>
                </div>
            `;
            document.getElementById('btn-open-review-modal').addEventListener('click', () => {
                // Pre-fill reviewer name
                document.getElementById('review-author-name').value = this.currentUser.name;
                // Reset stars to 5 stars
                document.getElementById('review-rating-value').value = 5;
                const stars = document.querySelectorAll('.star-rating-input i');
                stars.forEach(s => {
                    s.classList.replace('bx-star', 'bxs-star');
                    s.classList.add('active');
                });
                document.getElementById('review-text').value = '';
                this.openModal(this.reviewModal);
            });
        } else {
            reviewBtnContainer.innerHTML = `
                <p class="text-muted text-center font-italic">
                    <i class="bx bx-info-circle"></i> Bạn chưa thể đánh giá. Quyền đánh giá chỉ dành cho khách hàng đã từng đặt bàn trước và được nhà hàng xác nhận hoàn thành (Đã ăn ở đây).
                </p>
            `;
        }
    }

    handleReviewSubmit(e) {
        e.preventDefault();
        if (!this.currentUser) return;

        const rating = parseInt(document.getElementById('review-rating-value').value);
        const comment = document.getElementById('review-text').value.trim();
        const name = this.currentUser.name;

        if (!comment) {
            this.showNotification('Vui lòng nhập nội dung đánh giá.', 'error');
            return;
        }

        const reviews = this.getReviews();
        const newReview = {
            id: 'r_' + Date.now(),
            name,
            rating,
            comment,
            date: new Date().toISOString().split('T')[0]
        };

        reviews.push(newReview);
        this.setReviews(reviews);

        this.showNotification('Cảm ơn bạn đã đóng góp ý kiến đánh giá cho nhà hàng!', 'success');
        this.closeAllModals();
        this.renderHomeReviews();
    }

    // --- ADMIN SECTION LOGIC ---

    renderAdminSection() {
        if (!this.currentUser || this.currentUser.role !== 'admin') {
            this.switchView('home');
            return;
        }

        const bookings = this.getBookings();
        const reviews = this.getReviews();

        // 1. Calculate stats
        const total = bookings.length;
        const pending = bookings.filter(b => b.status === 'pending').length;
        const confirmed = bookings.filter(b => b.status === 'confirmed').length;
        const completed = bookings.filter(b => b.status === 'completed').length;
        const cancelled = bookings.filter(b => b.status === 'cancelled').length;

        document.getElementById('stat-total').textContent = total;
        document.getElementById('stat-pending').textContent = pending;
        document.getElementById('stat-confirmed').textContent = confirmed;
        document.getElementById('stat-completed').textContent = completed;
        document.getElementById('stat-cancelled').textContent = cancelled;

        // 2. Render booking table
        const tbody = document.getElementById('admin-bookings-tbody');
        if (!tbody) return;

        // Filter or search admin bookings
        const searchInput = document.getElementById('admin-search').value.trim().toLowerCase();
        const filterStatus = document.getElementById('admin-filter-status').value;

        let filteredBookings = [...bookings].reverse(); // Latest first

        if (searchInput) {
            filteredBookings = filteredBookings.filter(b => 
                b.name.toLowerCase().includes(searchInput) || 
                b.phone.includes(searchInput) || 
                b.tableNum.toString() === searchInput
            );
        }

        if (filterStatus !== 'all') {
            filteredBookings = filteredBookings.filter(b => b.status === filterStatus);
        }

        if (filteredBookings.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="8" class="text-center text-muted py-4">
                        Không có đơn đặt bàn nào khớp với bộ lọc.
                    </td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = filteredBookings.map(b => {
            let statusBadgeClass = 'badge-pending';
            let statusLabel = 'Chờ duyệt';
            if (b.status === 'confirmed') {
                statusBadgeClass = 'badge-confirmed';
                statusLabel = 'Đã xác nhận';
            } else if (b.status === 'completed') {
                statusBadgeClass = 'badge-completed';
                statusLabel = 'Đã hoàn thành';
            } else if (b.status === 'cancelled') {
                statusBadgeClass = 'badge-cancelled';
                statusLabel = 'Đã hủy';
            }

            const timeSlotLabel = b.timeSlot === 'lunch' ? 'Trưa (11:30 - 14:00)' :
                                  b.timeSlot === 'afternoon' ? 'Chiều (14:00 - 17:00)' :
                                  b.timeSlot === 'dinner' ? 'Tối (17:30 - 20:00)' : 'Đêm muộn (20:00 - 22:30)';

            // Actions mapping
            let actionButtons = '';
            if (b.status === 'pending') {
                actionButtons = `
                    <button class="btn btn-sm btn-success mr-1" onclick="app.updateBookingStatus('${b.id}', 'confirmed')"><i class="bx bx-check"></i> Xác nhận</button>
                    <button class="btn btn-sm btn-danger" onclick="app.updateBookingStatus('${b.id}', 'cancelled')"><i class="bx bx-x"></i> Hủy</button>
                `;
            } else if (b.status === 'confirmed') {
                actionButtons = `
                    <button class="btn btn-sm btn-gold mr-1" onclick="app.updateBookingStatus('${b.id}', 'completed')"><i class="bx bx-calendar-check"></i> Hoàn thành (Đã ăn)</button>
                    <button class="btn btn-sm btn-danger" onclick="app.updateBookingStatus('${b.id}', 'cancelled')"><i class="bx bx-x"></i> Hủy</button>
                `;
            } else {
                actionButtons = `<span class="text-muted">Không thao tác</span>`;
            }

            return `
                <tr>
                    <td><strong>#${b.id.slice(-6)}</strong></td>
                    <td>
                        <div class="font-weight-bold">${b.name}</div>
                        <small class="text-muted">${b.phone}</small>
                    </td>
                    <td>${b.date}</td>
                    <td><small>${timeSlotLabel}</small></td>
                    <td class="text-center font-weight-bold text-gold">Bàn ${b.tableNum}</td>
                    <td class="text-center">${b.guests} khách</td>
                    <td><span class="status-badge ${statusBadgeClass}">${statusLabel}</span></td>
                    <td class="admin-actions-cell">${actionButtons}</td>
                </tr>
            `;
        }).join('');

        // Wire up filtering events in admin section if not already wired
        const adminSearch = document.getElementById('admin-search');
        const adminFilter = document.getElementById('admin-filter-status');
        
        if (adminSearch && !adminSearch.dataset.wired) {
            adminSearch.addEventListener('input', () => this.renderAdminSection());
            adminSearch.dataset.wired = "true";
        }
        if (adminFilter && !adminFilter.dataset.wired) {
            adminFilter.addEventListener('change', () => this.renderAdminSection());
            adminFilter.dataset.wired = "true";
        }
    }

    updateBookingStatus(bookingId, newStatus) {
        const bookings = this.getBookings();
        const bookingIdx = bookings.findIndex(b => b.id === bookingId);

        if (bookingIdx !== -1) {
            bookings[bookingIdx].status = newStatus;
            this.setBookings(bookings);
            this.showNotification(`Đã chuyển đơn đặt bàn sang trạng thái: ${
                newStatus === 'confirmed' ? 'Đã xác nhận' :
                newStatus === 'completed' ? 'Đã hoàn thành' : 'Đã hủy'
            }`, 'success');
            
            // Refresh views
            this.renderAdminSection();
            this.updateReviewButtonState();
        }
    }

    // --- GLOBAL UTILITIES ---

    showNotification(message, type = 'success') {
        // Remove existing notifications
        const oldNotifs = document.querySelectorAll('.notification-toast');
        oldNotifs.forEach(n => n.remove());

        const toast = document.createElement('div');
        toast.className = `notification-toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="bx ${type === 'success' ? 'bx-check-circle' : 'bx-error-circle'} toast-icon"></i>
                <span class="toast-message">${message}</span>
            </div>
        `;
        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => toast.classList.add('active'), 10);

        // Remove after 3.5s
        setTimeout(() => {
            toast.classList.remove('active');
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }
}

// Global instantiation to let HTML inline events run (for admin status buttons)
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new GoldenSpoonApp();
    window.app = app;
});
