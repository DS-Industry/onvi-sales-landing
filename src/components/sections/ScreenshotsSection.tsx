'use client';

import Image from 'next/image';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import AppScreen1 from '@images/AppScreen1.jpg';
import AppScreen2 from '@images/AppScreen2.jpg';
import AppScreen3 from '@images/AppScreen3.jpg';
import AppScreen4 from '@images/AppScreen4.jpg';

const IMG_SET: Record<string, typeof AppScreen1> = {
  AppScreen1,
  AppScreen2,
  AppScreen3,
  AppScreen4,
};

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

        <div className="relative max-w-md mx-auto">
          {/* Arrows */}
          <button
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-10 cursor-pointer"
            onClick={() => carouselRef.current?.prev()}
            aria-label="Previous Slide"
          >
            <LeftOutlined />
          </button>
          <button
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 shadow-md z-10 cursor-pointer"
            onClick={() => carouselRef.current?.next()}
            aria-label="Next Slide"
          >
            <RightOutlined />
          </button>

          {/* Ant Design Carousel */}
          <Carousel
            ref={carouselRef}
            autoplay
            dots
            draggable
            dotPosition="bottom"
          >
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="px-4">
                <div className="bg-black rounded-3xl p-2 shadow-xl">
                  <Image
                    src={IMG_SET[`AppScreen${num}`]}
                    alt={`App Screenshot ${num}`}
                    width={300}
                    height={600}
                    className="rounded-2xl h-[500px] w-full object-cover"
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
