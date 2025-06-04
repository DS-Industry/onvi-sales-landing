'use client';

import Image from 'next/image';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import AppScreen1 from '@images/DesktopScreen1.png';
import AppScreen2 from '@images/DesktopScreen2.png';
import AppScreen3 from '@images/DesktopScreen3.png';
import AppScreen4 from '@images/DesktopScreen4.png';
import AppScreen5 from '@images/DesktopScreen5.png';
import AppScreen6 from '@images/DesktopScreen6.png';

const IMG_SET = [
  AppScreen1,
  AppScreen2,
  AppScreen3,
  AppScreen4,
  AppScreen5,
  AppScreen6,
];

export default function ScreenshotsSection() {
  const carouselRef = useRef<any>(null);

  return (
    <div className="py-24 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Простой и удобный интерфейс</h2>
          <p className="mt-4 text-xl text-gray-600">
            Приложение разработано с учетом потребностей автомобилистов
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Arrows */}
          <button
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-10 cursor-pointer"
            onClick={() => carouselRef.current?.prev()}
            aria-label="Previous Slide"
          >
            <LeftOutlined />
          </button>
          <button
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-10 cursor-pointer"
            onClick={() => carouselRef.current?.next()}
            aria-label="Next Slide"
          >
            <RightOutlined />
          </button>

          {/* Carousel */}
          <Carousel
            ref={carouselRef}
            autoplay
            dots
            draggable
            dotPosition="bottom"
            className="rounded-2xl overflow-hidden"
          >
            {IMG_SET.map((img, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white shadow-xl p-4 rounded-3xl w-full max-w-4xl">
                  <Image
                    src={img}
                    alt={`App Screenshot ${index + 1}`}
                    width={1200}
                    height={800}
                    className="rounded-xl w-full h-[500px] md:h-[600px] object-contain"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
