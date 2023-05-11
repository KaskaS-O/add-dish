const sizes = {
  mobileS: "300px",
  mobileM: "375px",

  tabletS: "768px",
  tabletM: "1024px",

  laptopS: "1200px",
  laptopM: "1440px",

  desktop: "1600px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  tabletS: `(min-width: ${sizes.tabletS})`,
  tabletM: `(min-width: ${sizes.tabletM})`,
  laptopS: `(min-width: ${sizes.laptopS})`,
  laptopM: `(min-width: ${sizes.laptopM})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
