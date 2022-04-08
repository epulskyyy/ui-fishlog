export const baseMenu = [
  {
    iconName: "bx bx-unite",
    label: "Dashboard",
    path:"/dashboard"
  },
  {
    iconName: "bx bx-wallet",
    label: "Pembelian",
    submenu: [{ iconName: "bx bx-wallet", label: "Pembelian", path:"/customer" }],
  },
  {
    iconName: "bx bx-receipt",
    label: "Penjualan",
    submenu: [{ iconName: "bx bx-wallet", label: "Pembelian", path:"/customer" }],
  },
  {
    iconName: "bx bx-archive",
    label: "Persediaan",
    submenu: [{ iconName: "bx bx-wallet", label: "Pembelian", path:"/customer" }],
  },
  {
    iconName: "bx bx-wallet",
    label: "Warehouse Rental",
    submenu: [{ iconName: "bx bx-wallet", label: "Pembelian", path:"/customer" }],
  },
  {
    iconName: "bx bx-wallet",
    label: "Operasional",
    submenu: [{ iconName: "bx bx-wallet", label: "Pembelian", path:"/customer" }],
  },
  {
    iconName: "bx bx-wallet",
    label: "Laporan",
    submenu: [{ iconName: "bx bx-wallet", label: "Pembelian", path:"/customer" }],
   
  },
  {
    iconName: "bx bx-wallet",
    label: "Data Master",
    submenu: [
        { iconName: "bx bx-wallet", label: "Daftar Gudang", path:"/daftar-gudang" },
        { iconName: "bx bx-wallet", label: "Kategori", path:"/kategori" },
        { iconName: "bx bx-wallet", label: "Unit", path:"/unit" },
        { iconName: "bx bx-wallet", label: "Produk", path:"/produk" },
        { iconName: "bx bx-wallet", label: "Produk SKU", path:"/produk-sku" },
        { iconName: "bx bx-wallet", label: "User", path:"/user" },
    ],
  },
  {
    iconName: "bx bx-wallet",
    label: "FishLog Network",
    path:"/fishlog-network"
  },
  {
    iconName: "bx bx-wallet",
    label: "Marketplace",
    path:"/marketplace"
  },
];
