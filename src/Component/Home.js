import React from "react";

class Home extends React.Component{


    render() {
        return (
            <div className="mt-3 home container text-center">
                <h1 className="mb-5">این سایت به منظور رزومه من ساخته شده</h1>
                <div className="row mt-4" style={{boxSizing:"border-box"}}>
                    <div className="col-md-12 col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mx-1 ">
                        <h3>توضیحات بخش جدول</h3>
                        <p> در بخش جدول یکسری ای پی آی گرفته شده است</p>
                        <p> در داخل جدول به کمک متد مپ ریخته شده است</p>
                        <p>دوتا آیتم حذف و لایک هم داریم که میتوان حذف یک سطر و لایک را انجام داد</p>
                        <p> در انتهای جدول بخش مدیریت صفحات را داریم که به صورت داینامیک اعدادش قرار گرفته و اگر 10 سطر حذف کنیم مشاهده میکنیم که تعداد از 10 به 9 تغییر میکند</p>
                        <p>در بخش کناری میتوان داده های جدول را براساس ایدی فیلتر کرد و نمایش داد</p>
                    </div>

                    <div className="col-md-12 col-lg-5 shadow-lg p-3 mb-5 bg-body rounded ">
                        <h3>توضیحات بخش آزمون</h3>
                        <p>در بخش تست یک شبه آزمون قرار گرفته که سوال ها بصورت ای پی آی گرفته شده است و سوال ها باید تک به تک جواب داده شود و امکان بازگشت به عقب هم وجود ندارد جواب ها هم با امکانات لودش چاوااسکریپت بصورت رندوم قرار گرفته شده بعد ار زدن پاسخ درست به تعداد پاسخ های صحیح ما یک پاسخ اضافه میشود در سوال اخر ازمون بجای دکمه بعدی دیکمه اتمام دیده میشود که بعد از زدن آن دکمه به صفحه اصلی برمیگردیم</p>
                    </div>
                </div>
                <div className="row space"></div>
            </div>
        );
    }
}
export default Home