export type Locale = 'en' | 'bg';

export type LocalizedString = {
  en: string;
  bg: string;
};

export type ProductSpec = {
  label: LocalizedString;
  value: LocalizedString;
};

export type ProductSection = {
  title: LocalizedString;
  body?: LocalizedString;
  bullets?: LocalizedString[];
};

export type Product = {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  short: LocalizedString;
  images: string[];
  highlights: LocalizedString[];
  specs: ProductSpec[];
  sections: ProductSection[];
};

export const PRODUCTS: Product[] = [
  {
    slug: 'holographic-led-screen',
    title: {
      en: 'LED Holographic Screen',
      bg: 'LED Холограмен Екран'
    },
    subtitle: {
      en: '3D effect, high brightness and transparency — for storefronts, events and architecture.',
      bg: '3D ефект, висока яркост и прозрачност — за витрини, събития и архитектура.'
    },
    short: {
      en: 'An innovative LED product based on transparent LED technologies — ultra-thin design, high resolution and durability.',
      bg: 'Иновативен LED продукт, базиран на прозрачни LED технологии — ултратънък дизайн, висока резолюция и устойчивост.'
    },
    images: [
      '/products/holographic/1.jpg',
      '/products/holographic/2.jpg',
      '/products/holographic/3.jpg',
      '/products/holographic/4.jpg',
      '/products/holographic/5.jpg'
    ],
    highlights: [
      {
        en: 'Up to 90% transparency',
        bg: 'Прозрачност до 90%'
      },
      {
        en: 'Lightweight design (approx. 6 kg/sq.m)',
        bg: 'Лек дизайн (примерно 6 кг/кв.м)'
      },
      {
        en: 'Slim profile (under ~2 mm on some models)',
        bg: 'Тънък профил (под ~2 мм при някои модели)'
      },
      {
        en: 'Modular maintenance',
        bg: 'Модулна поддръжка'
      }
    ],
    specs: [
      {
        label: {
          en: 'Image quality',
          bg: 'Качество на картината'
        },
        value: {
          en: 'P3.9 / P6.25 / P8 (depending on model)',
          bg: 'P3.9 / P6.25 / P8 (спрямо модел)'
        }
      },
      {
        label: {
          en: 'Module size',
          bg: 'Размер на модула'
        },
        value: {
          en: '1000 × 250 mm',
          bg: '1000 × 250 мм'
        }
      },
      {
        label: {
          en: 'Refresh rate',
          bg: 'Refresh rate'
        },
        value: {
          en: 'Up to 7680 Hz',
          bg: 'до 7680 Hz'
        }
      },
      {
        label: {
          en: 'Brightness',
          bg: 'Яркост'
        },
        value: {
          en: '900 – 5000 cd/㎡ (depending on model)',
          bg: '900 – 5000 cd/㎡ (спрямо модел)'
        }
      },
      {
        label: {
          en: 'IP rating',
          bg: 'IP рейтинг'
        },
        value: {
          en: 'IP20 (indoor) / options available',
          bg: 'IP20 (вътрешно) / опции'
        }
      },
      {
        label: {
          en: 'Transparency',
          bg: 'Прозрачност'
        },
        value: {
          en: '70% – 85% (up to 90% on some systems)',
          bg: '70% – 85% (до 90% при системи)'
        }
      }
    ],
    sections: [
      {
        title: {
          en: 'What is a holographic LED screen?',
          bg: 'Какво е холограмен LED екран?'
        },
        body: {
          en: 'A holographic LED screen combines transparency with strong visual impact. With 3D content, it creates a three-dimensional effect in front of the viewer, while when switched off it remains discreet and almost invisible.',
          bg: 'Холограмният LED екран съчетава прозрачност и силно въздействие. При 3D съдържание създава “тримерен” ефект пред зрителя, а при изключено състояние остава дискретен и почти невидим.'
        }
      },
      {
        title: {
          en: 'Advantages',
          bg: 'Предимства'
        },
        bullets: [
          {
            en: 'Frameless and transparent design — no grilles or heavy structures',
            bg: 'Безрамъчен и прозрачен дизайн — без решетки и тежки конструкции'
          },
          {
            en: 'Easy installation and maintenance — modular replacement without stopping the system',
            bg: 'Лесна инсталация и поддръжка — модулна подмяна без спиране на системата'
          },
          {
            en: 'Versatility — storefronts, halls, offices, architectural projects',
            bg: 'Универсалност — витрини, зали, офиси, архитектурни проекти'
          },
          {
            en: 'Detail and brightness — high refresh rate and good visibility',
            bg: 'Детайлност и яркост — висока честота и добра видимост'
          }
        ]
      },
      {
        title: {
          en: 'Differences compared to traditional transparent LED screens',
          bg: 'Разлики спрямо традиционните прозрачни LED екрани'
        },
        bullets: [
          {
            en: 'Structure: no supporting grilles → more transparency and easier installation',
            bg: 'Структура: без поддържащи решетки → повече прозрачност и по-лесен монтаж'
          },
          {
            en: 'Efficiency: balance between transparency and image quality — holographic technology combines both',
            bg: 'Ефективност: баланс прозрачност/качество — холографската технология ги комбинира'
          },
          {
            en: 'Customization: modular design → flexible configuration and sizing',
            bg: 'Персонализация: модулен дизайн → гъвкава конфигурация и размер'
          }
        ]
      },
      {
        title: {
          en: 'Installation methods',
          bg: 'Методи на монтаж'
        },
        bullets: [
          {
            en: 'On glass: ideal for storefronts and glass facades',
            bg: 'На стъкло: идеално за витрини и стъклени фасади'
          },
          {
            en: 'Standalone: portable modules for exhibitions and stages',
            bg: 'Самостоятелен: преносими модули за изложения и сцени'
          },
          {
            en: 'Suspended: shopping malls and stage productions',
            bg: 'Окачен: търговски центрове и сценични постановки'
          }
        ]
      },
      {
        title: {
          en: 'Applications',
          bg: 'Приложни сфери'
        },
        bullets: [
          {
            en: 'Retail storefronts: 3D effects to attract customers',
            bg: 'Търговски витрини: 3D ефекти за привличане на клиенти'
          },
          {
            en: 'Shopping malls: bright ads on glass partitions',
            bg: 'Търговски центрове: ярки реклами върху стъклени прегради'
          },
          {
            en: 'Exhibition halls: screens that blend with the architecture',
            bg: 'Изложбени зали: екрани, които “се сливат” с архитектурата'
          },
          {
            en: 'Offices: modern presentation of products and information',
            bg: 'Офиси: модерна визуализация на продукти и информация'
          }
        ]
      }
    ]
  }
];
