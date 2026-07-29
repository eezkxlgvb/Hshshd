document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const btn = document.getElementById('loginBtn');
    const message = document.getElementById('message');
    const husky = document.querySelector('.husky-icon');

    // اعتبارسنجی ساده
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            message.textContent = '❌ لطفاً همه فیلدها را پر کن!';
            message.className = 'message';
            return;
        }

        // شبیه‌سازی ورود
        message.textContent = '⏳ در حال ورود...';
        message.className = 'message';

        // == انیمیشن در باز ==
        btn.classList.add('door-open');
        await wait(500);

        // == انیمیشن راه رفتن ==
        btn.classList.add('walking');
        await wait(700);

        // == ورود موفق ==
        btn.classList.remove('door-open', 'walking');
        btn.classList.add('out');
        message.textContent = '✅ خوش آمدی! هاسکی خوشحاله 🐺';
        message.className = 'message success';

        // هاسکی خوشحال
        husky.classList.add('is-happy');

        // ریست بعد از ۳ ثانیه (برای نمایش دوباره)
        setTimeout(() => {
            btn.classList.remove('out');
            husky.classList.remove('is-happy');
            message.textContent = '';
            message.className = 'message';
        }, 4000);
    });

    // تابع کمکی
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // دکمه‌های اجتماعی (فقط نمایش)
    document.querySelectorAll('.social').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('🔧 این قابلیت به‌زودی اضافه می‌شود!');
        });
    });
});
