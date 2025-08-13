// Freddo’s App JavaScript

/* Data Definitions */
const menuData = {
    categories: [
        {
            id: 'freddos',
            name: { es: 'Freddos Frío/Ice Coffee', en: 'Freddos Cold/Ice Coffee' },
            items: [
                { id: 'freddo_espresso', name: { es: 'Freddo Espresso', en: 'Freddo Espresso' }, price: 3.5 },
                { id: 'freddo_cappuccino', name: { es: 'Freddo Cappuccino', en: 'Freddo Cappuccino' }, price: 4.5 },
                { id: 'ice_latte', name: { es: 'Ice Latte', en: 'Ice Latte' }, price: 4.5 },
                { id: 'ice_americano', name: { es: 'Ice Americano', en: 'Ice Americano' }, price: 4.5 },
                { id: 'tiramisu_iced', name: { es: 'Tiramisú', en: 'Tiramisu' }, price: 4.5 },
                { id: 'chocolate_iced', name: { es: 'Chocolate (frío)', en: 'Chocolate (cold)' }, price: 4.5 },
                { id: 'vainilla_iced', name: { es: 'Vainilla (frío)', en: 'Vanilla (cold)' }, price: 4.5 },
                { id: 'matcha_latte_iced', name: { es: 'Matcha Latte (frío)', en: 'Matcha Latte (iced)' }, price: 4.6 }
            ]
        },
        {
            id: 'frappes',
            name: { es: 'Frappés & Sirope', en: 'Frappes & Syrups' },
            items: [
                { id: 'frappe_cafe', name: { es: 'Frappé Café', en: 'Frappe Coffee' }, price: 4.6 },
                { id: 'frappe_yogurt', name: { es: 'Frappé Yogurt', en: 'Frappe Yogurt' }, price: 4.6 },
                { id: 'frappe_vainilla', name: { es: 'Frappé Vainilla', en: 'Frappe Vanilla' }, price: 4.6 },
                { id: 'frappe_caramelo', name: { es: 'Frappé Caramelo', en: 'Frappe Caramel' }, price: 4.6 },
                { id: 'frappe_mocha', name: { es: 'Frappé Mocha', en: 'Frappe Mocha' }, price: 4.6 },
                { id: 'frappe_chocolate', name: { es: 'Frappé Chocolate', en: 'Frappe Chocolate' }, price: 4.6 }
            ]
        },
        {
            id: 'cafes',
            name: { es: 'Cafés calientes', en: 'Hot Coffees' },
            items: [
                { id: 'espresso_single', name: { es: 'Espresso simple', en: 'Espresso single' }, price: 2.5 },
                { id: 'espresso_double', name: { es: 'Espresso doble', en: 'Espresso double' }, price: 3.2 },
                { id: 'macchiato_single', name: { es: 'Macchiato simple', en: 'Macchiato single' }, price: 2.8 },
                { id: 'macchiato_double', name: { es: 'Macchiato doble', en: 'Macchiato double' }, price: 3.5 },
                { id: 'latte_single', name: { es: 'Latte simple', en: 'Latte single' }, price: 3.2 },
                { id: 'latte_double', name: { es: 'Latte doble', en: 'Latte double' }, price: 3.9 },
                { id: 'cappuccino_single', name: { es: 'Cappuccino simple', en: 'Cappuccino single' }, price: 3.0 },
                { id: 'cappuccino_double', name: { es: 'Cappuccino doble', en: 'Cappuccino double' }, price: 4.0 },
                { id: 'chocolate_hot', name: { es: 'Chocolate caliente', en: 'Hot chocolate' }, price: 4.0 }
            ]
        },
        {
            id: 'bebidas',
            name: { es: 'Bebidas', en: 'Drinks' },
            items: [
                { id: 'agua', name: { es: 'Agua', en: 'Water' }, price: 1.2 },
                { id: 'agua_gas', name: { es: 'Agua con gas', en: 'Sparkling water' }, price: 2.0 },
                { id: 'zumos', name: { es: 'Zumos', en: 'Juices' }, price: 2.0 },
                { id: 'refrescos', name: { es: 'Refrescos', en: 'Soft drinks' }, price: 2.0 }
            ]
        },
        {
            id: 'snacks',
            name: { es: 'Snacks', en: 'Snacks' },
            items: [
                { id: 'bougatsa_sweet', name: { es: 'Bougatsa Sweet', en: 'Bougatsa Sweet' }, price: 1.5 },
                { id: 'tiropita_feta', name: { es: 'Tiropita Feta', en: 'Tiropita Feta' }, price: 1.8 },
                { id: 'cookie', name: { es: 'Cookie', en: 'Cookie' }, price: 3.0 },
                { id: 'muffin', name: { es: 'Muffin', en: 'Muffin' }, price: 3.5 }
            ]
        },
        {
            id: 'extras',
            name: { es: 'Extras', en: 'Extras' },
            items: [
                { id: 'cafe_brasil', name: { es: 'Café Brasil', en: 'Brazil Coffee' }, price: 0.5 },
                { id: 'shot_doble', name: { es: 'Shot doble', en: 'Double shot' }, price: 0.7 },
                { id: 'leche_vegetal', name: { es: 'Leche vegetal', en: 'Plant-based milk' }, price: 0.4 },
                { id: 'siropes', name: { es: 'Sirope', en: 'Syrup' }, price: 0.4 }
            ]
        }
    ]
};

// Translation strings
const translations = {
    es: {
        nav_home: 'Inicio',
        nav_menu: 'Menú',
        nav_club: 'Coffee Club',
        nav_profile: 'Perfil',
        hero_welcome: 'Bienvenido a Freddo’s',
        hero_intro: 'Disfruta de nuestros cafés, frappés y snacks. Selecciona una categoría para empezar tu pedido.',
        button_start_order: 'Pedir ahora',
        categories_title: 'Categorías',
        category_freddos: 'Freddos Frío/Ice Coffee',
        category_cafes: 'Cafés calientes',
        category_frappes: 'Frappés & Sirope',
        category_bebidas: 'Bebidas',
        category_snacks: 'Snacks',
        category_extras: 'Extras',
        menu_title: 'Menú',
        cart_title: 'Carrito',
        button_continue_shopping: 'Seguir comprando',
        button_checkout: 'Pagar',
        checkout_title: 'Pagar',
        checkout_contact_title: 'Tus datos',
        checkout_name_label: 'Nombre',
        checkout_phone_label: 'Teléfono',
        checkout_email_label: 'Correo electrónico',
        checkout_pickup_label: 'Hora de recogida',
        button_pay_now: 'Pagar ahora',
        confirmation_title: 'Confirmación de pedido',
        button_back_home: 'Volver al inicio',
        club_title: 'Freddo’s Coffee Club',
        club_subscribe: 'Suscribirse por 9,99€/mes',
        club_unsubscribe: 'Cancelar suscripción',
        club_status_member: '¡Eres miembro!',
        club_status_non_member: 'No eres miembro todavía',
        club_benefits_title: 'Beneficios del Club',
        // Eliminado: el beneficio de "precios sin aumento de 1€" se ha
        // retirado del listado público. La lógica de precios con recargo
        // sigue activa en computeItemPrice pero ya no se muestra como
        // beneficio visible.
        club_benefit_beverage: '1 bebida gratis al mes',
        club_benefit_upgrades: '2 upgrades al mes (leche vegetal, siropes)',
        club_benefit_rewards: '10 cafés = 1 gratis',
        club_level: 'Nivel',
        club_xp: 'Puntos XP',
        profile_title: 'Perfil',
        profile_membership: 'Suscripción',
        profile_orders: 'Pedidos realizados',
        profile_language: 'Idioma',
        level_bronze: 'Bronce',
        level_silver: 'Plata',
        level_gold: 'Oro',
        level_elite: 'Elite',
        pick_pickup_time_error: 'La hora de recogida debe ser al menos 20 minutos después.',
        form_validation_error: 'Por favor, completa todos los campos del formulario.',
        order_confirmation_message: '¡Gracias por tu pedido! Tu número de orden es',
        order_membership_summary: 'Tu progreso de Coffee Club:',
        order_level: 'Nivel',
        order_xp: 'XP total',
        profile_beverage_to_next: 'Cafés hasta la siguiente recompensa',
        cart_empty: 'El carrito está vacío.',
        profile_not_member: 'No eres miembro del Club aún',
        profile_member_since: 'Miembro desde',
        free_text: 'Gratis'
    },
    en: {
        nav_home: 'Home',
        nav_menu: 'Menu',
        nav_club: 'Coffee Club',
        nav_profile: 'Profile',
        hero_welcome: 'Welcome to Freddo’s',
        hero_intro: 'Enjoy our coffees, frappes and snacks. Select a category to start your order.',
        button_start_order: 'Order now',
        categories_title: 'Categories',
        category_freddos: 'Freddos Cold/Ice Coffee',
        category_cafes: 'Hot coffees',
        category_frappes: 'Frappes & Syrups',
        category_bebidas: 'Drinks',
        category_snacks: 'Snacks',
        category_extras: 'Extras',
        menu_title: 'Menu',
        cart_title: 'Cart',
        button_continue_shopping: 'Continue shopping',
        button_checkout: 'Checkout',
        checkout_title: 'Checkout',
        checkout_contact_title: 'Your details',
        checkout_name_label: 'Name',
        checkout_phone_label: 'Phone',
        checkout_email_label: 'Email',
        checkout_pickup_label: 'Pickup time',
        button_pay_now: 'Pay now',
        confirmation_title: 'Order confirmation',
        button_back_home: 'Back to home',
        club_title: 'Freddo’s Coffee Club',
        club_subscribe: 'Subscribe for €9.99/month',
        club_unsubscribe: 'Cancel subscription',
        club_status_member: 'You are a member!',
        club_status_non_member: 'You are not a member yet',
        club_benefits_title: 'Club benefits',
        // Removed: the "prices without €1 increase" benefit is no longer
        // displayed to customers. Pricing logic still applies in
        // computeItemPrice but is not advertised as a perk.
        club_benefit_beverage: '1 free drink per month',
        club_benefit_upgrades: '2 upgrades per month (plant milk, syrups)',
        club_benefit_rewards: '10 coffees = 1 free',
        club_level: 'Level',
        club_xp: 'XP points',
        profile_title: 'Profile',
        profile_membership: 'Subscription',
        profile_orders: 'Orders placed',
        profile_language: 'Language',
        level_bronze: 'Bronze',
        level_silver: 'Silver',
        level_gold: 'Gold',
        level_elite: 'Elite',
        pick_pickup_time_error: 'Pickup time must be at least 20 minutes later.',
        form_validation_error: 'Please complete all form fields.',
        order_confirmation_message: 'Thank you for your order! Your order number is',
        order_membership_summary: 'Your Coffee Club progress:',
        order_level: 'Level',
        order_xp: 'Total XP',
        profile_beverage_to_next: 'Coffees until next reward',
        cart_empty: 'Your cart is empty.',
        profile_not_member: 'You are not yet a Club member',
        profile_member_since: 'Member since',
        free_text: 'Free'
    }
};

/* Membership thresholds and settings */
const membershipSettings = {
    price: 9.99,
    monthlyFreeDrinkValue: 3.5,
    upgradesPerMonth: 2,
    xpPerEuro: 10,
    levels: [
        { nameKey: 'level_bronze', minXp: 0, maxXp: 499 },
        { nameKey: 'level_silver', minXp: 500, maxXp: 999 },
        { nameKey: 'level_gold', minXp: 1000, maxXp: 1999 },
        { nameKey: 'level_elite', minXp: 2000, maxXp: Infinity }
    ]
};

/* Helper functions for language */
function getLanguage() {
    return localStorage.getItem('lang') || 'es';
}
function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    translatePage();
}
function translatePage() {
    const lang = getLanguage();
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            el.textContent = translation;
        }
    });
    // update placeholders if needed
    const inputs = document.querySelectorAll('input[placeholder-i18n]');
    inputs.forEach(input => {
        const key = input.getAttribute('placeholder-i18n');
        const translation = translations[lang][key];
        if (translation) {
            input.setAttribute('placeholder', translation);
        }
    });
}

/* Membership operations */
function getMembership() {
    const data = localStorage.getItem('membership');
    if (data) return JSON.parse(data);
    return { active: false, xp: 0, level: 'level_bronze', joinDate: null, orders: 0 };
}
function setMembership(membership) {
    localStorage.setItem('membership', JSON.stringify(membership));
}
function calculateLevel(xp) {
    for (const level of membershipSettings.levels) {
        if (xp >= level.minXp && xp <= level.maxXp) {
            return level.nameKey;
        }
    }
    return membershipSettings.levels[0].nameKey;
}
function updateMembershipXp(amountEuros) {
    const membership = getMembership();
    const additionalXp = Math.round(amountEuros * membershipSettings.xpPerEuro);
    membership.xp += additionalXp;
    membership.level = calculateLevel(membership.xp);
    membership.orders += 1;
    setMembership(membership);
}
function toggleMembership() {
    const membership = getMembership();
    if (membership.active) {
        // cancel subscription
        membership.active = false;
        membership.joinDate = null;
    } else {
        membership.active = true;
        membership.joinDate = new Date().toISOString();
    }
    setMembership(membership);
    // reload page content if on club page
    if (window.location.pathname.endsWith('coffee_club.html')) {
        loadClub();
    }
    if (window.location.pathname.endsWith('profile.html')) {
        loadProfile();
    }
}

/* Cart operations */
function getCart() {
    const data = localStorage.getItem('cart');
    if (data) return JSON.parse(data);
    return [];
}
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function addToCart(itemId, extras = []) {
    const cart = getCart();
    cart.push({ id: itemId, extras });
    setCart(cart);
    alert(translations[getLanguage()].cart_title + ': ' + translations[getLanguage()].button_continue_shopping);
}
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    setCart(cart);
    loadCart();
}
function clearCart() {
    localStorage.removeItem('cart');
}

/* Price calculation */
function findItemById(itemId) {
    for (const category of menuData.categories) {
        const item = category.items.find(it => it.id === itemId);
        if (item) return { ...item, categoryId: category.id };
    }
    return null;
}
function findExtraById(extraId) {
    const extrasCategory = menuData.categories.find(cat => cat.id === 'extras');
    if (!extrasCategory) return null;
    return extrasCategory.items.find(it => it.id === extraId);
}
function computeItemPrice(itemId, extras = [], membershipActive) {
    const item = findItemById(itemId);
    if (!item) return 0;
    let price = item.price;
    // Add 1€ surcharge if not member
    if (!membershipActive) {
        price += 1;
    }
    // Extras always cost
    for (const extraId of extras) {
        const extra = findExtraById(extraId);
        if (extra) {
            price += extra.price;
        }
    }
    return price;
}

/* Rendering functions */
function loadMenu() {
    const container = document.getElementById('menuContainer');
    if (!container) return;
    const lang = getLanguage();
    // Clear existing
    container.innerHTML = '';
    for (const category of menuData.categories) {
        // Skip extras category here
        if (category.id === 'extras') continue;
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = category.id;
        const heading = document.createElement('h2');
        heading.textContent = category.name[lang];
        section.appendChild(heading);
        const list = document.createElement('ul');
        list.className = 'item-list';
        for (const item of category.items) {
            const li = document.createElement('li');
            li.className = 'item';
            // Create separate spans for the name and the price so they can be styled
            // individually and aligned consistently across all items. Assign
            // semantic class names that are targeted in the CSS for fixed
            // column widths (see styles.css). The name span will flex to
            // take any remaining space, whereas the price and view button
            // have fixed widths for perfect vertical alignment.
            const nameSpan = document.createElement('span');
            nameSpan.className = 'item-name';
            nameSpan.textContent = item.name[lang];
            const priceSpan = document.createElement('span');
            priceSpan.className = 'item-price';
            // show membership and non-membership price
            const membership = getMembership();
            const priceMember = computeItemPrice(item.id, [], true).toFixed(2);
            const priceNon = computeItemPrice(item.id, [], false).toFixed(2);
            priceSpan.textContent = membership.active ? `${priceMember} €` : `${priceNon} €`;
            const button = document.createElement('button');
            button.className = 'btn-view';
            button.textContent = lang === 'es' ? 'Ver' : 'View';
            button.addEventListener('click', () => {
                window.location.href = `product.html?id=${item.id}`;
            });
            li.appendChild(nameSpan);
            li.appendChild(priceSpan);
            li.appendChild(button);
            list.appendChild(li);
        }
        section.appendChild(list);
        container.appendChild(section);
    }
}

function loadProduct() {
    const container = document.getElementById('productDetails');
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('id');
    const item = findItemById(itemId);
    if (!item) {
        container.innerHTML = `<p>Producto no encontrado.</p>`;
        return;
    }
    const lang = getLanguage();
    const membership = getMembership();
    // Create content
    const title = document.createElement('h2');
    title.textContent = item.name[lang];
    const priceParagraph = document.createElement('p');
    const priceMember = computeItemPrice(item.id, [], true).toFixed(2);
    const priceNon = computeItemPrice(item.id, [], false).toFixed(2);
    priceParagraph.textContent = membership.active ? `${priceMember} €` : `${priceNon} €`;
    // Extras selection
    const extrasDiv = document.createElement('div');
    extrasDiv.className = 'extras';
    const extrasHeading = document.createElement('h3');
    extrasHeading.textContent = lang === 'es' ? 'Extras' : 'Extras';
    const extrasList = document.createElement('ul');
    extrasList.className = 'extras-list';
    const extrasCategory = menuData.categories.find(cat => cat.id === 'extras');
    for (const extra of extrasCategory.items) {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = extra.id;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${extra.name[lang]} (+${extra.price.toFixed(2)} €)`));
        li.appendChild(label);
        extrasList.appendChild(li);
    }
    extrasDiv.appendChild(extrasHeading);
    extrasDiv.appendChild(extrasList);
    // Add to cart button
    const addButton = document.createElement('button');
    addButton.className = 'btn-primary';
    addButton.textContent = lang === 'es' ? 'Añadir al carrito' : 'Add to cart';
    addButton.addEventListener('click', () => {
        const selectedExtras = [];
        extrasList.querySelectorAll('input:checked').forEach(input => {
            selectedExtras.push(input.value);
        });
        addToCart(item.id, selectedExtras);
        // redirect to cart
        window.location.href = 'cart.html';
    });
    container.innerHTML = '';
    container.appendChild(title);
    container.appendChild(priceParagraph);
    container.appendChild(extrasDiv);
    container.appendChild(addButton);
}

function loadCart() {
    const container = document.getElementById('cartContainer');
    const summaryDiv = document.getElementById('cartSummary');
    if (!container || !summaryDiv) return;
    const cart = getCart();
    const lang = getLanguage();
    const membership = getMembership();
    container.innerHTML = '';
    summaryDiv.innerHTML = '';
    if (cart.length === 0) {
        container.innerHTML = `<p>${translations[lang].cart_empty}</p>`;
        return;
    }
    let total = 0;
    cart.forEach((itemObj, index) => {
        const item = findItemById(itemObj.id);
        const price = computeItemPrice(itemObj.id, itemObj.extras, membership.active);
        total += price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        const nameSpan = document.createElement('span');
        nameSpan.textContent = item ? item.name[lang] : itemObj.id;
        const extrasSpan = document.createElement('span');
        if (itemObj.extras && itemObj.extras.length > 0) {
            const extrasNames = itemObj.extras.map(extraId => {
                const extra = findExtraById(extraId);
                return extra ? extra.name[lang] : extraId;
            });
            extrasSpan.textContent = ` + ${extrasNames.join(', ')}`;
        }
        const priceSpan = document.createElement('span');
        priceSpan.textContent = `${price.toFixed(2)} €`;
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn-secondary';
        removeBtn.textContent = 'X';
        removeBtn.addEventListener('click', () => removeFromCart(index));
        div.appendChild(nameSpan);
        div.appendChild(extrasSpan);
        div.appendChild(priceSpan);
        div.appendChild(removeBtn);
        container.appendChild(div);
    });
    // Summary
    const summaryList = document.createElement('ul');
    summaryList.className = 'profile-content';
    const totalItem = document.createElement('li');
    totalItem.textContent = `Total: ${total.toFixed(2)} €`;
    summaryList.appendChild(totalItem);
    // membership info
    const membershipInfo = document.createElement('li');
    if (membership.active) {
        membershipInfo.textContent = translations[lang].club_status_member;
    } else {
        membershipInfo.textContent = translations[lang].club_status_non_member;
    }
    summaryList.appendChild(membershipInfo);
    summaryDiv.appendChild(summaryList);
}

function loadCheckout() {
    const summaryDiv = document.getElementById('checkoutSummary');
    const form = document.getElementById('checkoutForm');
    if (!summaryDiv || !form) return;
    const cart = getCart();
    const lang = getLanguage();
    const membership = getMembership();
    summaryDiv.innerHTML = '';
    if (cart.length === 0) {
        summaryDiv.innerHTML = `<p>${translations[lang].cart_empty}</p>`;
        form.style.display = 'none';
        return;
    }
    let total = 0;
    const list = document.createElement('ul');
    list.className = 'profile-content';
    cart.forEach(itemObj => {
        const item = findItemById(itemObj.id);
        const price = computeItemPrice(itemObj.id, itemObj.extras, membership.active);
        total += price;
        const li = document.createElement('li');
        li.textContent = `${item ? item.name[lang] : itemObj.id} - ${price.toFixed(2)} €`;
        list.appendChild(li);
    });
    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${total.toFixed(2)} €`;
    list.appendChild(totalLi);
    summaryDiv.appendChild(list);
    // Set minimum pickup time (current time + 20 min)
    const pickupInput = document.getElementById('pickupTime');
    const now = new Date();
    now.setMinutes(now.getMinutes() + 20);
    const iso = now.toISOString().slice(0, 16);
    pickupInput.min = iso;
    // Form submission
    form.onsubmit = (e) => {
        e.preventDefault();
        // validate form
        const name = form.name.value.trim();
        const phone = form.phone.value.trim();
        const email = form.email.value.trim();
        const pickupTime = form.pickupTime.value;
        if (!name || !phone || !email || !pickupTime) {
            alert(translations[lang].form_validation_error);
            return;
        }
        const pickupDate = new Date(pickupTime);
        const minDate = new Date();
        minDate.setMinutes(minDate.getMinutes() + 20);
        if (pickupDate < minDate) {
            alert(translations[lang].pick_pickup_time_error);
            return;
        }
        // finalize order
        finalizeOrder(name, phone, email, pickupTime, total);
    };
}

function finalizeOrder(name, phone, email, pickupTime, total) {
    // update membership XP
    updateMembershipXp(total);
    // store order details
    const order = {
        number: Math.floor(Math.random() * 1000000),
        items: getCart(),
        total: total,
        date: new Date().toISOString(),
        pickupTime,
        name,
        phone,
        email
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));
    // clear cart
    clearCart();
    // redirect to confirmation
    window.location.href = 'confirmation.html';
}

function loadConfirmation() {
    const container = document.getElementById('confirmationDetails');
    if (!container) return;
    const lang = getLanguage();
    const orderData = localStorage.getItem('lastOrder');
    if (!orderData) {
        container.innerHTML = `<p>Pedido no encontrado.</p>`;
        return;
    }
    const order = JSON.parse(orderData);
    const membership = getMembership();
    const orderNumberP = document.createElement('p');
    orderNumberP.textContent = `${translations[lang].order_confirmation_message} #${order.number}`;
    const totalP = document.createElement('p');
    totalP.textContent = `Total: ${order.total.toFixed(2)} €`;
    const pickupP = document.createElement('p');
    const pickupDate = new Date(order.pickupTime);
    pickupP.textContent = `${lang === 'es' ? 'Recoger en' : 'Pickup at'}: ${pickupDate.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US')}`;
    // membership summary
    const membershipDiv = document.createElement('div');
    const membershipTitle = document.createElement('h3');
    membershipTitle.textContent = translations[lang].order_membership_summary;
    const membershipLevelP = document.createElement('p');
    membershipLevelP.textContent = `${translations[lang].order_level}: ${translations[lang][membership.level]}`;
    const membershipXpP = document.createElement('p');
    membershipXpP.textContent = `${translations[lang].order_xp}: ${membership.xp}`;
    membershipDiv.appendChild(membershipTitle);
    membershipDiv.appendChild(membershipLevelP);
    membershipDiv.appendChild(membershipXpP);
    container.innerHTML = '';
    container.appendChild(orderNumberP);
    container.appendChild(totalP);
    container.appendChild(pickupP);
    container.appendChild(membershipDiv);
}

function loadClub() {
    const container = document.getElementById('clubContent');
    if (!container) return;
    const lang = getLanguage();
    const membership = getMembership();
    container.innerHTML = '';
    const statusP = document.createElement('p');
    statusP.className = 'club-status';
    statusP.textContent = membership.active ? translations[lang].club_status_member : translations[lang].club_status_non_member;
    container.appendChild(statusP);
    const button = document.createElement('button');
    button.className = 'btn-primary';
    button.textContent = membership.active ? translations[lang].club_unsubscribe : translations[lang].club_subscribe;
    button.addEventListener('click', toggleMembership);
    container.appendChild(button);
    // Show membership details if active
    const benefitsTitle = document.createElement('h3');
    benefitsTitle.textContent = translations[lang].club_benefits_title;
    const benefitsList = document.createElement('ul');
    benefitsList.className = 'club-benefits';
    // Do not include the removed price benefit key. Only list the
    // publicly visible benefits: free beverage, upgrades and rewards.
    const benefitItems = ['club_benefit_beverage', 'club_benefit_upgrades', 'club_benefit_rewards'];
    for (const b of benefitItems) {
        const li = document.createElement('li');
        li.textContent = translations[lang][b];
        benefitsList.appendChild(li);
    }
    container.appendChild(benefitsTitle);
    container.appendChild(benefitsList);
    // membership progress
    const membershipLevelName = translations[lang][membership.level];
    const levelP = document.createElement('p');
    levelP.textContent = `${translations[lang].club_level}: ${membershipLevelName}`;
    container.appendChild(levelP);
    const xpP = document.createElement('p');
    xpP.textContent = `${translations[lang].club_xp}: ${membership.xp}`;
    container.appendChild(xpP);
    // progress bar
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    // calculate progress between current and next level
    const currentLevel = membershipSettings.levels.find(l => l.nameKey === membership.level);
    let nextLevel = membershipSettings.levels[membershipSettings.levels.length - 1];
    for (const lvl of membershipSettings.levels) {
        if (lvl.minXp > currentLevel.minXp) {
            nextLevel = lvl;
            break;
        }
    }
    const progressRange = nextLevel.maxXp - currentLevel.minXp;
    const progressValue = membership.xp - currentLevel.minXp;
    // Calculate the percentage of progress within the current level.  When
    // the range is infinity (top level), the bar should be full.  If
    // there is no progress yet we still render a small portion of the
    // bar so the user can see the progress indicator at a glance.
    let percent = progressRange === Infinity ? 1 : (progressValue / progressRange);
    if (percent > 1) percent = 1;
    // Ensure the progress bar is always visible: at least 2% wide
    if (percent < 0.02) percent = 0.02;
    progressBar.style.width = `${percent * 100}%`;
    progressContainer.appendChild(progressBar);
    container.appendChild(progressContainer);
}

function loadProfile() {
    const container = document.getElementById('profileContent');
    if (!container) return;
    const lang = getLanguage();
    const membership = getMembership();
    const ordersCount = membership.orders || 0;
    container.innerHTML = '';
    const list = document.createElement('ul');
    const liMembership = document.createElement('li');
    liMembership.textContent = `${translations[lang].profile_membership}: ${membership.active ? translations[lang].club_status_member : translations[lang].profile_not_member}`;
    const liOrders = document.createElement('li');
    liOrders.textContent = `${translations[lang].profile_orders}: ${ordersCount}`;
    const liLanguage = document.createElement('li');
    liLanguage.textContent = `${translations[lang].profile_language}: ${lang.toUpperCase()}`;
    list.appendChild(liMembership);
    list.appendChild(liOrders);
    list.appendChild(liLanguage);
    container.appendChild(list);
}

/* Common initialization */
function initPage() {
    // init language select
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = getLanguage();
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
    translatePage();
    // determine which page we are on
    const pathname = window.location.pathname;
    if (pathname.endsWith('menu.html')) {
        loadMenu();
    } else if (pathname.endsWith('product.html')) {
        loadProduct();
    } else if (pathname.endsWith('cart.html')) {
        loadCart();
    } else if (pathname.endsWith('checkout.html')) {
        loadCheckout();
    } else if (pathname.endsWith('confirmation.html')) {
        loadConfirmation();
    } else if (pathname.endsWith('coffee_club.html')) {
        loadClub();
    } else if (pathname.endsWith('profile.html')) {
        loadProfile();
    }
}
// Run init on DOM ready
document.addEventListener('DOMContentLoaded', initPage);