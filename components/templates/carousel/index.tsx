'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';
import { Link } from '@nextui-org/link';

const slides = [
	{ src: '/images/banner.png', alt: 'AWS logo' },
	// { src: "/imgs/banner2.png", alt: "NextJS logo" },
	{ src: '/images/banner-3.png', alt: 'NextJS logo' },
];

export const Carousel: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slideInterval = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		startAutoPlay();
		return () => {
			if (slideInterval.current) {
				clearInterval(slideInterval.current);
			}
		};
	}, []);

	const startAutoPlay = () => {
		slideInterval.current = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 5000);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
		if (slideInterval.current) {
			clearInterval(slideInterval.current);
		}
		startAutoPlay();
	};

	return (
		<div className={styles.carouselContainer}>
			<div
				className={styles.slides}
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<div className={styles.slide} key={index}>
						<Link href="#">
							<Image
								src={slide.src}
								alt={slide.alt}
								className={styles.image}
								width={0}
								height={0}
								sizes="100vm"
								style={{ width: '100%', height: 'auto' }}
							/>
						</Link>
					</div>
				))}
			</div>
			<div className={styles.dots}>
				{slides.map((_, index) => (
					<span
						key={index}
						className={`${styles.dot} ${
							currentIndex === index ? styles.active : ''
						}`}
						onClick={() => goToSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};
