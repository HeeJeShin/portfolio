import Image from "next/image";
import { adminScreen, pcScreens, screens } from "../_data/constants";

// 실제 화면 캡처: 사용자 화면(휴대폰)과 관리 화면(PC)
export const ScreensSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">화면으로 보기</h2>
      <p className="text-sm text-gray-600 mb-6">사용자 화면은 매장에서 휴대폰으로 보는 걸 기준으로 만들었고, 관리 화면은 PC에서 넓게 써요.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {screens.map((s) => (
          <figure key={s.src} className="flex flex-col gap-2">
            <div className="h-[360px] md:h-[520px] overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <Image src={s.src} alt={s.title} width={s.width} height={s.height} className="w-full h-auto" />
            </div>
            <figcaption>
              <p className="text-sm font-bold text-gray-900">{s.title}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {pcScreens.map((s) => (
          <figure key={s.src} className="flex flex-col gap-2">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <Image src={s.src} alt={s.title} width={s.width} height={s.height} className="w-full h-auto" />
            </div>
            <figcaption>
              <p className="text-sm font-bold text-gray-900">{s.title}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <figure className="flex flex-col gap-2">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-3 md:p-5">
          <Image src={adminScreen.src} alt={adminScreen.title} width={adminScreen.width} height={adminScreen.height} className="w-full h-auto" />
        </div>
        <figcaption>
          <p className="text-sm font-bold text-gray-900">{adminScreen.title}</p>
          <p className="text-xs text-gray-600">{adminScreen.desc}</p>
          <p className="text-xs text-gray-500">{adminScreen.note}</p>
        </figcaption>
      </figure>
    </section>
  );
};
