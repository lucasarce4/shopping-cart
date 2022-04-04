import i712700 from '../assets/processors/i7-12700k.jpg';
import ryzen5600g from '../assets/processors/ryzen5600g.jpg';
import i912900 from '../assets/processors/i9-12900.jpg';
import ryzen5900 from '../assets/processors/ryzen5900.jpg';
import i512600 from '../assets/processors/i512600.jpg';
import evga570 from '../assets/motherboards/evgax570.jpg';
import asusrog from '../assets/motherboards/asusrog.jpg';
import asusprime from '../assets/motherboards/asusprime.jpg';
import geforce1650 from '../assets/gpu/geforce1650.jpg';
import radeon6600 from '../assets/gpu/radeon6600.jpg';
import geforce3050 from '../assets/gpu/geforce3050.jpg';
import geforce3080 from '../assets/gpu/geforce3080.jpg';
import geforce710 from '../assets/gpu/geforce710.jpg';
import corsair16gb from '../assets/ram/corsair16gb.jpg';
import team16gb from '../assets/ram/team16gb.jpg';
import gskill32gb from '../assets/ram/gskill32gb.jpg';
import diypc from '../assets/cases/diypc.jpg';
import antecdark from '../assets/cases/antecdark.jpg';
import rosewill from '../assets/cases/rosewill.jpg';

const products = [{
  type: 'processor',
  shortName: 'Intel Core i7-12700K',
  name: 'Intel Core i7-12700K - Core i7 12th Gen Alder Lake 12-Core (8P+4E) 3.6 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor',
  price: '399.99',
  img: i712700,
},
{
  type: 'processor',
  shortName: 'AMD Ryzen 5 5600G',
  name: 'AMD Ryzen 5 5600G - Ryzen 5 5000 G-Series Cezanne (Zen 3) 6-Core 3.9 GHz Socket AM4 65W AMD Radeon Graphics Desktop Processor',
  price: '259.00',
  img: ryzen5600g,
},
{
  type: 'processor',
  shortName: 'Intel Core i9-12900K',
  name: 'Intel Core i9-12900K - Core i9 12th Gen Alder Lake 16-Core (8P+8E) 3.2 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor',
  price: '614.99',
  img: i912900,
},
{
  type: 'processor',
  shortName: 'AMD Ryzen 9 5900X',
  name: 'AMD Ryzen 9 5900X - Ryzen 9 5000 Series Vermeer (Zen 3) 12-Core 3.7 GHz Socket AM4 105W Desktop Processor',
  price: '498.49',
  img: ryzen5900,
},
{
  type: 'processor',
  shortName: 'Intel Core i5-12600K',
  name: 'Intel Core i5-12600K - Core i5 12th Gen Alder Lake 10-Core (6P+4E) 3.7 GHz LGA 1700 125W Intel UHD Graphics 770 Desktop Processor',
  price: '276.96',
  img: i512600,
},
{
  type: 'motherboard',
  shortName: 'EVGA X570 FTW WIFI',
  name: 'EVGA X570 FTW WIFI, 121-VR-A577-KR, AM4, AMD X570, PCIe Gen4, SATA 6Gb/s, Wi-Fi 6/BT5.2, USB 3.2 Gen2, M.2, ATX, AMD Motherboard',
  price: '499.99',
  img: evga570,
},
{
  type: 'motherboard',
  shortName: 'ASUS ROG Crosshair VIII',
  name: 'ASUS ROG Crosshair VIII Dark Hero AM4 AMD X570S SATA 6Gb/s ATX AMD Motherboard',
  price: '449.99',
  img: asusrog,
},
{
  type: 'motherboard',
  shortName: 'ASUS Prime Z690-A',
  name: 'ASUS Prime Z690-A LGA 1700 Intel 12th ATX Motherboard- 16+1 DrMOS, PCIe 5.0, DDR5, 4x M.2, Intel 2.5 Gb LAN, USB 3.2 Gen 2 Front Panel Type-C, Thunderbolt 4, Aura Sync RGB Lighting',
  price: '279.99',
  img: asusprime,
},
{
  type: 'gpu',
  shortName: 'GIGABYTE GeForce GTX 1650',
  name: 'GIGABYTE GeForce GTX 1650 4GB GDDR5 PCI Express 3.0 x16 Low Profile Video Card GV-N1650OC-4GL',
  price: '350.00',
  img: geforce1650,
},
{
  type: 'gpu',
  shortName: 'GIGABYTE Radeon RX 6600',
  name: 'GIGABYTE Radeon RX 6600 EAGLE 8G Graphics Card, WINDFORCE 3X Cooling System, 8GB 128-bit GDDR6, GV-R66EAGLE-8GD Video Card',
  price: '369.99',
  img: radeon6600,
},
{
  type: 'gpu',
  shortName: 'ASUS ROG Strix GeForce RTX 3050',
  name: 'ASUS ROG Strix GeForce RTX 3050 8GB GDDR6 PCI Express 4.0 Video Card ROG-STRIX-RTX3050-O8G-GAMING',
  price: '489.99',
  img: geforce3050,
},
{
  type: 'gpu',
  shortName: 'GIGABYTE AORUS GeForce RTX 3080 Ti',
  name: 'GIGABYTE AORUS GeForce RTX 3080 Ti 12GB GDDR6X PCI Express 4.0 ATX Video Card GV-N308TAORUS M-12GD',
  price: '1649.99',
  img: geforce3080,
},
{
  type: 'gpu',
  shortName: 'ASUS NVIDIA GeForce GT 710',
  name: 'ASUS NVIDIA GeForce GT 710 Graphics Card (PCIe 2.0, 2GB GDDR5 Memory, 4 x HDMI Ports, Single-slot Design, Passive Cooling)',
  price: '135.33',
  img: geforce710,
},
{
  type: 'ram',
  shortName: 'CORSAIR Vengeance RGB Pro 16GB',
  name: 'CORSAIR Vengeance RGB Pro 16GB (2 x 8GB) 288-Pin DDR4 DRAM DDR4 3200 (PC4 25600) Desktop Memory Model CMW16GX4M2C3200C16',
  price: '82.99',
  img: corsair16gb,
},
{
  type: 'ram',
  shortName: 'Team T-Force Delta RGB 16GB',
  name: 'Team T-Force Delta RGB 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Intel XMP 2.0 Desktop Memory Model TF4D416G3200HC16CDC01',
  price: '74.99',
  img: team16gb,
},
{
  type: 'ram',
  shortName: 'G.SKILL Trident Z5 RGB Series 32GB',
  name: 'G.SKILL Trident Z5 RGB Series 32GB (2 x 16GB) 288-Pin DDR5 SDRAM DDR5 6000 Intel XMP 3.0 Desktop Memory Model F5-6000J3636F16GX2-TZ5RK',
  price: '399.99',
  img: gskill32gb,
},
{
  type: 'case',
  shortName: 'DIYPC ARGB-Q8-W White',
  name: 'DIYPC ARGB-Q8-W White USB 3.0 Steel / Tempered Glass Micro-ATX Mid Tower Computer Case, 1x 120mm ARGB Fan x Rear (Pre-Installed)',
  price: '44.93',
  img: diypc,
},
{
  type: 'case',
  shortName: 'Antec Dark League DF600 FLUX',
  name: 'Antec Dark League DF600 FLUX, Mid-Tower ATX Gaming Case, FLUX Platform, 5 x 120mm Fans Included, ARGB & PWM Fan Controller, Tempered Glass Side Panel, 2 x USB3.0, High-End GPU Support',
  price: '104.99',
  img: antecdark,
},
{
  type: 'case',
  shortName: 'Rosewill - SPECTRA D100 ATX',
  name: 'Rosewill - SPECTRA D100 ATX Mid Tower Gaming PC Computer Case with Dual Ring RGB LED Fans, 360mm & 240mm Liquid Cooling Radiator Support, Tempered Glass/Steel, Front Mesh Panel, USB 3.0',
  price: '109.99',
  img: rosewill,
},
];

export default products;
