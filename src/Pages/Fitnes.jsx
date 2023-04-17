import React from 'react'

export default function Fitnes() {
  return (
    <div>
      <header className='w-full min-h-[90vh] bg-[url("https://uzbek-women-frontend.netlify.app/static/media/bg.33f08b20f05487d596eb.jpg")] bg-cover'>
        <div className="bg-[rgba(0,0,0,.627)] w-full min-h-[90vh]">
          <div className="w-[60%] min-h-[90vh] flex justify-center flex-col gap-4 pl-[100px]">
            <h3 className="text-[#EEA73D] font-[s] text-4xl font-bold">
              Biz bilan 18 yoshdagidek ...
            </h3>
            <p className="text-white text-xl">
              Bu erda fitnesni o'zgartirishni boshlashingizga yordam beradigan
              ayollar uchun bir nechta boshlang'ich fitnes maslahatlari mavjud.
            </p>
          </div>
        </div>
      </header>
      <div className="flex flex-wrap justify-center items-center text-center flex-col gap-4 p-4">
        <h3 className="text-[#EEA73D] text-[22px] font-bold">
          AYOLLAR UCHUN ASOSIY <br /> FITNES MASLAHATLARI
        </h3>
        <p className="text-white">
          Power Life Team Tomonidan | 2021 Yil 15 Yanvar
        </p>
        <div className="w-[450px] max-w-[90%] flex flex-col justify-center items-center gap-3 shadow-lg shadow-[#EEA73D] rounded-xl p-3">
          <img
            src="	https://uzbek-women-frontend.netlify.app/static/media/1.c757899042396b5101b4.png"
            alt=""
            className="rounded-xl"
          />
          <p className="text-md text-white">
            Ayollar uchun ushbu muhim fitnes maslahatlari bilan mashg'ulotlarni
            muntazam ravishda bajaring. Sizning hozirgi fitness maqsadlaringiz
            yoki qobiliyatingizdan qat'i nazar, har qanday ayol (har qanday
            yoshdagi) sog'lig'i va kuchini mustahkam fitnes dasturi bilan
            qo'llab-quvvatlashi mumkin.
          </p>
        </div>
        <div className="w-full min-h-[60vh] flex justify-evenly items-center flex-wrap pt-12 text-white">
          <div className="w-[450px] min-h-[350px] max-w-[90%] flex justify-start items-center gap-3 flex-col">
            <h3 className="text-[#EEA73D] text-[22px] font-bold">
              Kichikdan boshlang
            </h3>
            <p className="text-sm">
              Jismoniy mashqlarni kundalik tartibingizga qanchalik ko'p
              kiritsangiz, u shunchalik tabiiy (va oson) bo'ladi. Har bir
              insonning turli jadvallari, mas'uliyatlari va motivatsiya
              darajalari bor. Demak, siri kichikdan boshlash va u yerdan
              qurishdir. Shunday qilib, siz o'zingizni haddan tashqari
              ko'tarishdan qochishingiz mumkin - bu sizni mashq qilishingizga
              to'sqinlik qilishi mumkin. Miyangizni bir soat ishlashga
              ishontirishning o'rniga, o'zingizga atigi besh daqiqa mashq
              qilmoqchi ekanligingizni ayting. Keyin tom ma'noda besh daqiqa
              mashq qiling. Harakat qilishni boshlaganingizdan so'ng, ko'pincha
              bir oz ko'proq yurishga qaror qilasiz, endi siz krossovkalar va
              mashg'ulot jihozlaringizni kiyib olgansiz. Va, siz kuchayganingiz
              sayin, minimal vaqtingizni oshirishingiz mumkin.
            </p>
          </div>
          <div className="w-[450px] min-h-[350px] max-w-[90%] flex justify-start items-center gap-3 flex-col">
            <h3 className="text-[#EEA73D] text-[22px] font-bold">
              Jismoniy mashqlarni kun tartibining bir qismiga aylantiring
            </h3>
            <p className="text-sm">
              Har kuni mashq qilish har kuni sport zaliga borishingiz kerak
              degani emas. Muntazam mashg'ulot oddiy bo'lishi shart emas. Yangi
              va qiziqarli narsalarni saqlash uchun turli xil fitnes
              mashg'ulotlari jadvalini tuzing. Siz, masalan, haftasiga uch marta
              sport zalida kuch mashq qilishingiz, seshanba kuni HIIT yoki
              velosiped mashg'ulotlariga, juma kuni yoga va shanba kuni
              do'stlaringiz bilan sayr qilishingiz mumkin. Yakshanba dam olish
              kuni bo'lishi mumkin yoki nonushtadan keyin oilangiz bilan
              mahallada sayr qilishingiz mumkin. Ba'zan siz bir kunni o'tkazib
              yuborasiz. Buni zeriktirmang. O'zingizga mehribon bo'ling.
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
