export const formatMoney = (value: number | bigint) =>
  new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" }).format(
    value
);