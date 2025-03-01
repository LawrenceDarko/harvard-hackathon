import { RiDashboardLine } from "react-icons/ri";
import { BiMoney } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { BiDollar } from "react-icons/bi";
import { AiOutlineFlag } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { FaMoneyCheckAlt, FaPager } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { BalanceItemData, IExpensesGoalsCategory, IUpcomingBillsData } from "@/types/types";
import { MdOutlineCategory } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";


export const sidebarLinks = [
    {
        label: 'Dashboard',
        route: '/',
        icon: RiDashboardLine
    },
    {
        label: 'Create Report',
        route: '/chatai',
        icon: GiMoneyStack
    },
];

export const transactionFields = [
    "amount",
    "beneficiary",
    "briefDescription",
    "date",
    "name",
    "receipt",
]

export const billsFields = [
    "amount",
    "description",
    "frequencyNumber",
    "name",
    "billLogo",
]

export const categoryFields = [
    "name",
    "description",
    "categoryType"
]

export const assetFields = [
    "name",
    "description",
    // "category",
    "value",
    "datePurchased",
    "image"
]

export const userFields = [
    "email",
    "username",
    // "phone",
]

export const bankFields = [
    "bankName",
    "accountType",
    "branchName",
    "accountNumber"
]




export const SampleData: BalanceItemData[] = [
    { _id: '1', accountType: 'Credit Card', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '3388-4556-8860 ****', balance: '$2,500', bankName: 'Bank A' },
    { _id: '1', accountType: 'Debit Card', cardLogoSrc: '/icons/Visacard.svg', accountNumber: '5566 7788 9900 ****', balance: '$1,200', bankName: 'Bank B' },
    { _id: '1', accountType: 'Prepaid Card', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '1122 3344 5566 ****', balance: '$500', bankName: 'Bank C' },
    { _id: '1', accountType: 'Savings Account', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '9900 8877 6655 ****', balance: '$10,000', bankName: 'Bank D' },
    { _id: '1', accountType: 'Investment Portfolio', cardLogoSrc: '/icons/Visacard.svg', accountNumber: '2233 4455 6677 ****', balance: '$50,000', bankName: 'Bank E' },
    { _id: '1', accountType: 'Insurance Account', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '7766 5544 3322 ****', balance: '$3,000', bankName: 'Bank F' },
    { _id: '1', accountType: 'Cryptocurrency Wallet', cardLogoSrc: '/icons/bitcoin.svg', accountNumber: '1A2b3C4d5E ****', balance: '$8,000', bankName: 'Bank G' },
    { _id: '1', accountType: 'Student Loan', cardLogoSrc: '/icons/Visacard.svg', accountNumber: '9988 7766 5544 ****', balance: '$15,000', bankName: 'Bank H' },
    { _id: '1', accountType: 'Mortgage Loan', cardLogoSrc: '/icons/Mastercard.svg', accountNumber: '3322 5544 6677 ****', balance: '$200,000', bankName: 'Bank I' },
    { _id: '1', accountType: 'Personal Line of Credit', cardLogoSrc: '/icons/Visacard.svg', accountNumber: '6677 8899 0011 ****', balance: '$5,000', bankName: 'Bank J' },
];

export const upcomingBillsData: IUpcomingBillsData[] = [
    { name: 'Bitcoin', date: new Date(), logo: "/icons/bitcoin.svg", description: "Monthly Subscription", lastCharged: "2024-03-30", amount: 49.99 },
    { name: 'Adobe Subscription', date: new Date(), logo: "/icons/Adobe.svg", description: "Internet Service", lastCharged: "2024-04-15", amount: 69.99 },
    { name: 'Netflix Subscription', date: new Date(), logo: "/icons/Mastercard.svg", description: "Phone Bill", lastCharged: "2024-03-25", amount: 45.00 },
    { name: 'Electricity Bill', date: new Date(), logo: "/icons/Adobe.svg", description: "Software License Renewal", lastCharged: "2024-04-05", amount: 99.99 },
    { name: 'Water Bill', date: new Date(), logo: "/icons/Adobe.svg", description: "Gym Membership", lastCharged: "2024-03-28", amount: 29.99 }
];

export const ExpensesGoalsCategoryData: IExpensesGoalsCategory[] = [
    {category: "Transport", totalAmount: 100.00},
    {category: "Food", totalAmount: 200.00},
    {category: "Sales", totalAmount: 50.00},
    {category: "Entertainment", totalAmount: 150.00},
    {category: "Shopping", totalAmount: 300.00},
    {category: "Salary", totalAmount: -100.00},
    {category: "Health", totalAmount: 80.00},
    {category: "Investment", totalAmount: -500.00}
];

export const merchantListData = [
    {
        id: "MTT-1234567",
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        status: "prospective",
    },
    {
        id: "MTT-2345678",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "987-654-3210",
        status: "rejected",
    },
    {
        id: "MTT-3456789",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "555-123-4567",
        status: "prospective",
    },
    {
        id: "MTT-4567890",
        name: "Bob Williams",
        email: "bob.williams@example.com",
        phone: "222-987-6543",
        status: "rejected",
    },
    {
        id: "MTT-5678901",
        name: "Eva Brown",
        email: "eva.brown@example.com",
        phone: "333-555-8888",
        status: "prospective",
    },
    {
        id: "MTT-6789012",
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        phone: "777-888-9999",
        status: "rejected",
    },
    {
        id: "MTT-7890123",
        name: "Grace Miller",
        email: "grace.miller@example.com",
        phone: "111-222-3333",
        status: "prospective",
    },
    {
        id: "MTT-8901234",
        name: "David Taylor",
        email: "david.taylor@example.com",
        phone: "444-666-7777",
        status: "rejected",
    },
    {
        id: "MTT-9012345",
        name: "Sophia Wilson",
        email: "sophia.wilson@example.com",
        phone: "999-111-4444",
        status: "prospective",
    },
    {
        id: "MTT-0123456",
        name: "Henry Anderson",
        email: "henry.anderson@example.com",
        phone: "666-333-5555",
        status: "rejected",
    },
    {
        id: "MTT-8921234",
        name: "David Taylor",
        email: "david.taylor@example.com",
        phone: "444-666-7777",
        status: "rejected",
    },
    {
        id: "MTT-8901434",
        name: "David Taylor",
        email: "david.taylor@example.com",
        phone: "444-666-7777",
        status: "rejected",
    },
];

export const financialAssetCategories = [
    { value: 'equities', label: 'Equities (Stocks)' },
    { value: 'fixed_income', label: 'Fixed Income (Bonds)' },
    // { value: 'cash_equivalents', label: 'Cash and Cash Equivalents' },
    { value: 'real_estate', label: 'Real Estate' },
    { value: 'commodities', label: 'Commodities' },
    { value: 'derivatives', label: 'Derivatives' },
    { value: 'mutual_funds', label: 'Mutual Funds' },
    { value: 'etfs', label: 'Exchange-Traded Funds (ETFs)' },
    { value: 'cryptocurrencies', label: 'Cryptocurrencies' },
    { value: 'alternative_investments', label: 'Alternative Investments' },
    { value: 'insurance_products', label: 'Insurance Products' }
];

export const timeZones = [
    { value: 'UTC-12:00', label: 'UTC-12:00' },
    { value: 'GMT', label: 'GMT' },
    { value: 'EST', label: 'EST' },
    { value: 'CST', label: 'CST' },
    { value: 'MST', label: 'MST' },
    { value: 'PST', label: 'PST' },
    { value: 'AKST', label: 'AKST' },
    { value: 'HST', label: 'HST' },
    { value: 'UTC+12:00', label: 'UTC+12:00' },
    { value: 'UTC+11:00', label: 'UTC+11:00' },
    { value: 'UTC+10:00', label: 'UTC+10:00' },
    { value: 'UTC+09:00', label: 'UTC+09:00' },
    { value: 'UTC+08:00', label: 'UTC+08:00' },
    { value: 'UTC+07:00', label: 'UTC+07:00' },
    { value: 'UTC+06:00', label: 'UTC+06:00' },
    { value: 'UTC+05:00', label: 'UTC+05:00' },
    { value: 'UTC+04:00', label: 'UTC+04:00' },
    { value: 'UTC+03:00', label: 'UTC+03:00' },
    { value: 'UTC+02:00', label: 'UTC+02:00' },
    { value: 'UTC+01:00', label: 'UTC+01:00' },
    { value: 'UTC+00:00', label: 'UTC+00:00' },
    { value: 'UTC-01:00', label: 'UTC-01:00' },
    { value: 'UTC-02:00', label: 'UTC-02:00' },
]


export const currencies = [
    { value: 'AED', label: 'AED' },
    { value: 'AFN', label: 'AFN' },
    { value: 'ALL', label: 'ALL' },
    { value: 'AMD', label: 'AMD' },
    { value: 'ANG', label: 'ANG' },
    { value: 'AOA', label: 'AOA' },
    { value: 'ARS', label: 'ARS' },
    { value: 'AUD', label: 'AUD' },
    { value: 'AWG', label: 'AWG' },
    { value: 'AZN', label: 'AZN' },
    { value: 'BAM', label: 'BAM' },
    { value: 'BBD', label: 'BBD' },
    { value: 'BDT', label: 'BDT' },
    { value: 'BGN', label: 'BGN' },
    { value: 'BHD', label: 'BHD' },
    { value: 'BIF', label: 'BIF' },
    { value: 'BMD', label: 'BMD' },
    { value: 'BND', label: 'BND' },
    { value: 'BOB', label: 'BOB' },
    { value: 'BRL', label: 'BRL' },
    { value: 'BSD', label: 'BSD' },
    { value: 'BTN', label: 'BTN' },
    { value: 'BWP', label: 'BWP' },
    { value: 'BYN', label: 'BYN' },
    { value: 'BZD', label: 'BZD' },
    { value: 'CAD', label: 'CAD' },
    { value: 'CDF', label: 'CDF' },
    { value: 'CHF', label: 'CHF' },
    { value: 'CLP', label: 'CLP' },
    { value: 'CNY', label: 'CNY' },
    { value: 'COP', label: 'COP' },
    { value: 'CRC', label: 'CRC' },
    { value: 'CUP', label: 'CUP' },
    { value: 'CVE', label: 'CVE' },
    { value: 'CZK', label: 'CZK' },
    { value: 'DJF', label: 'DJF' },
    { value: 'DKK', label: 'DKK' },
    { value: 'DOP', label: 'DOP' },
    { value: 'DZD', label: 'DZD' },
    { value: 'EGP', label: 'EGP' },
    { value: 'ERN', label: 'ERN' },
    { value: 'ETB', label: 'ETB' },
    { value: 'EUR', label: 'EUR' },
    { value: 'FJD', label: 'FJD' },
    { value: 'FKP', label: 'FKP' },
    { value: 'FOK', label: 'FOK' },
    { value: 'GBP', label: 'GBP' },
    { value: 'GEL', label: 'GEL' },
    { value: 'GGP', label: 'GGP' },
    { value: 'GHS', label: 'GHS' },
    { value: 'GIP', label: 'GIP' },
    { value: 'GMD', label: 'GMD' },
    { value: 'GNF', label: 'GNF' },
    { value: 'GTQ', label: 'GTQ' },
    { value: 'GYD', label: 'GYD' },
    { value: 'HKD', label: 'HKD' },
    { value: 'HNL', label: 'HNL' },
    { value: 'HRK', label: 'HRK' },
    { value: 'HTG', label: 'HTG' },
    { value: 'HUF', label: 'HUF' },
    { value: 'IDR', label: 'IDR' },
    { value: 'ILS', label: 'ILS' },
    { value: 'IMP', label: 'IMP' },
    { value: 'INR', label: 'INR' },
    { value: 'IQD', label: 'IQD' },
    { value: 'IRR', label: 'IRR' },
    { value: 'ISK', label: 'ISK' },
    { value: 'JEP', label: 'JEP' },
    { value: 'JMD', label: 'JMD' },
    { value: 'JOD', label: 'JOD' },
    { value: 'JPY', label: 'JPY' },
    { value: 'KES', label: 'KES' },
    { value: 'KGS', label: 'KGS' },
    { value: 'KHR', label: 'KHR' },
    { value: 'KID', label: 'KID' },
    { value: 'KMF', label: 'KMF' },
    { value: 'KRW', label: 'KRW' },
    { value: 'KWD', label: 'KWD' },
    { value: 'KYD', label: 'KYD' },
    { value: 'KZT', label: 'KZT' },
    { value: 'LAK', label: 'LAK' },
    { value: 'LBP', label: 'LBP' },
    { value: 'LKR', label: 'LKR' },
    { value: 'LRD', label: 'LRD' },
    { value: 'LSL', label: 'LSL' },
    { value: 'LYD', label: 'LYD' },
    { value: 'MAD', label: 'MAD' },
    { value: 'MDL', label: 'MDL' },
    { value: 'MGA', label: 'MGA' },
    { value: 'MKD', label: 'MKD' },
    { value: 'MMK', label: 'MMK' },
    { value: 'MNT', label: 'MNT' },
    { value: 'MOP', label: 'MOP' },
    { value: 'MRU', label: 'MRU' },
    { value: 'MUR', label: 'MUR' },
    { value: 'MVR', label: 'MVR' },
    { value: 'MWK', label: 'MWK' },
    { value: 'MXN', label: 'MXN' },
    { value: 'MYR', label: 'MYR' },
    { value: 'MZN', label: 'MZN' },
    { value: 'NAD', label: 'NAD' },
    { value: 'NGN', label: 'NGN' },
    { value: 'NIO', label: 'NIO' },
    { value: 'NOK', label: 'NOK' },
    { value: 'NPR', label: 'NPR' },
    { value: 'NZD', label: 'NZD' },
    { value: 'OMR', label: 'OMR' },
    { value: 'PAB', label: 'PAB' },
    { value: 'PEN', label: 'PEN' },
    { value: 'PGK', label: 'PGK' },
    { value: 'PHP', label: 'PHP' },
    { value: 'PKR', label: 'PKR' },
    { value: 'PLN', label: 'PLN' },
    { value: 'PYG', label: 'PYG' },
    { value: 'QAR', label: 'QAR' },
    { value: 'RON', label: 'RON' },
    { value: 'RSD', label: 'RSD' },
    { value: 'RUB', label: 'RUB' },
    { value: 'RWF', label: 'RWF' },
    { value: 'SAR', label: 'SAR' },
    { value: 'SBD', label: 'SBD' },
    { value: 'SCR', label: 'SCR' },
    { value: 'SDG', label: 'SDG' },
    { value: 'SEK', label: 'SEK' },
    { value: 'SGD', label: 'SGD' },
    { value: 'SHP', label: 'SHP' },
    { value: 'SLE', label: 'SLE' },
    { value: 'SLL', label: 'SLL' },
    { value: 'SOS', label: 'SOS' },
    { value: 'SRD', label: 'SRD' },
    { value: 'SSP', label: 'SSP' },
    { value: 'STN', label: 'STN' },
    { value: 'SYP', label: 'SYP' },
    { value: 'SZL', label: 'SZL' },
    { value: 'THB', label: 'THB' },
    { value: 'TJS', label: 'TJS' },
    { value: 'TMT', label: 'TMT' },
    { value: 'TND', label: 'TND' },
    { value: 'TOP', label: 'TOP' },
    { value: 'TRY', label: 'TRY' },
    { value: 'TTD', label: 'TTD' },
    { value: 'TVD', label: 'TVD' },
    { value: 'TWD', label: 'TWD' },
    { value: 'TZS', label: 'TZS' },
    { value: 'UAH', label: 'UAH' },
    { value: 'UGX', label: 'UGX' },
    { value: 'USD', label: 'USD' },
    { value: 'UYU', label: 'UYU' },
    { value: 'UZS', label: 'UZS' },
    { value: 'VES', label: 'VES' },
    { value: 'VND', label: 'VND' },
    { value: 'VUV', label: 'VUV' },
    { value: 'WST', label: 'WST' },
    { value: 'XAF', label: 'XAF' },
    { value: 'XCD', label: 'XCD' },
    { value: 'XDR', label: 'XDR' },
    { value: 'XOF', label: 'XOF' },
    { value: 'XPF', label: 'XPF' },
    { value: 'YER', label: 'YER' },
    { value: 'ZAR', label: 'ZAR' },
    { value: 'ZMW', label: 'ZMW' },
    { value: 'ZWL', label: 'ZWL' },
  ];
  
  export default currencies;
  
