# aggregtionedData
# 🧾 Order Aggregation API (Node.js + MongoDB)

API برای مدیریت سفارش‌ها و محاسبه‌ی مجموع فروش با استفاده از MongoDB Aggregation Framework، توسعه‌یافته با Node.js، Express و Mongoose.

---

## 📦 درباره پروژه

این پروژه شامل دو مدل اصلی است:

- `Product`: اطلاعات مربوط به محصولات
- `Order`: اطلاعات مربوط به سفارش‌ها، شامل لیستی از آیتم‌ها که هرکدام به یک محصول اشاره دارند

تمرکز اصلی پروژه روی محاسبه‌ی مجموع فروش از روی داده‌های ذخیره‌شده با استفاده از **Aggregation Pipeline** است.

> ⚠️ توجه: APIهای کامل برای `User`، `Order` و `Product` هنوز پیاده‌سازی نشده‌اند. این نسخه شامل منطق aggregation و اتصال پایه به دیتابیس است.

---

## 🛠️ تکنولوژی‌ها

- Node.js
- Express.js
- MongoDB
- Mongoose
- MongoDB Compass

---

## 🔧 نصب و راه‌اندازی

1. کلون کردن مخزن:
   ```bash
   git clone https://github.com/yourusername/order-aggregation-api.git
   cd order-aggregation-api

   نصب وابستگی‌ها:


npm install
ساخت فایل .env برای اتصال به دیتابیس:


MONGO_URI=mongodb://localhost:27017/aggregation-demo
PORT=5000
اجرای پروژه:


npm run dev
🧪 مسیرهای API
Method	Route	توضیح
GET	/total-sales	محاسبه مجموع فروش کل سفارش‌ها با aggregation

📊 ساختار داده
🔹 Product
js
Copy
Edit
{
  _id: ObjectId,
  name: String,
  price: Number
}
🔹 Order
js
Copy
Edit
{
  _id: ObjectId,
  items: [
    {
      productId: ObjectId,
      quantity: Number
    }
  ]
}
🧮 Aggregation مورد استفاده
$unwind: باز کردن آرایه‌ی آیتم‌ها در سفارش‌ها

$lookup: اتصال داده‌ها به کالکشن محصولات

$project: استخراج داده‌های مورد نیاز

$group: جمع کل فروش
