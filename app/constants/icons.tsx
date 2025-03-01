import { BiTaxi, BiCameraMovie } from 'react-icons/bi';
import { FaUtensils } from 'react-icons/fa';
import { GiReceiveMoney, GiPayMoney, GiHealthNormal } from 'react-icons/gi';
import { AiOutlineShopping } from 'react-icons/ai';
import { RiBankLine } from 'react-icons/ri';
import { MdWork, MdOutlineBusiness, MdAllInclusive, MdOutlineFastfood, MdOutlineRestaurantMenu, MdOutlineSchool, MdOutlineLocalGroceryStore, MdOutlineEmojiEvents } from 'react-icons/md';
import { HiOutlineBuildingOffice, HiOutlineTrash } from 'react-icons/hi2';
import { RxMix } from 'react-icons/rx';
import { GoLaw } from "react-icons/go";

export const getIcon = (category: string, type?: string) => {
    if (category.includes('Transport')) {
        return <BiTaxi color="#6b7280" />; // Gray
    } else if (category.includes('Food')) {
        return <FaUtensils color="#6b7280" />; // Gray
    } else if (category.includes('Sales')) {
        return type === 'income' ? <GiReceiveMoney color="#10b981" /> : <GiPayMoney color="#ef4444" />; // Green or Red
    } else if (category.includes('Entertainment')) {
        return <BiCameraMovie color="#a855f7" />; // Purple
    } else if (category.includes('Shopping')) {
        return <AiOutlineShopping color="#3b82f6" />; // Blue
    } else if (category.includes('Salary') || category.includes('Salaries') || category.includes('Staff Salaries')) {
        return <GiReceiveMoney color="#10b981" />; // Green
    } else if (category.includes('Health')) {
        return <GiHealthNormal color="#ef4444" />; // Red
    } else if (category.includes('Investment') || category.includes('Investments')) {
        return <RiBankLine color="#f59e0b" />; // Yellow
    } else if (category.includes('Utilities')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Travel')) {
        return <BiTaxi color="#6b7280" />; // Gray
    } else if (category.includes('Insurance')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Education')) {
        return <MdOutlineSchool color="#6b7280" />; // Gray
    } else if (category.includes('Gifts')) {
        return <MdOutlineEmojiEvents color="#6b7280" />; // Gray
    } else if (category.includes('Rent')) {
        return <HiOutlineBuildingOffice color="#6b7280" />; // Gray
    } else if (category.includes('Operational Costs')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Office Supplies')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Marketing')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Legal')) {
        return <GoLaw color="#6b7280" />;
    } else if (category.includes('Training')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Consulting')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Technology')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Grants')) {
        return <HiOutlineTrash color="#6b7280" />; // Gray
    } else if (category.includes('Donations')) {
        return <HiOutlineTrash color="#6b7280" />; // Gray
    } else if (category.includes('Tithes')) {
        return <HiOutlineTrash color="#6b7280" />; // Gray
    } else if (category.includes('Offerings')) {
        return <HiOutlineTrash color="#6b7280" />; // Gray
    } else if (category.includes('Missionary Work')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Charity')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Building Maintenance')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Events')) {
        return <MdOutlineEmojiEvents color="#6b7280" />; // Gray
    } else if (category.includes('Membership Fees')) {
        return <HiOutlineTrash color="#6b7280" />; // Gray
    } else if (category.includes('Equipment')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Sponsorship')) {
        return <HiOutlineTrash color="#6b7280" />; // Gray
    } else if (category.includes('Tuition Fees')) {
        return <MdOutlineSchool color="#6b7280" />; // Gray
    } else if (category.includes('Books and Supplies')) {
        return <MdOutlineSchool color="#6b7280" />; // Gray
    } else if (category.includes('Field Trips')) {
        return <MdOutlineSchool color="#6b7280" />; // Gray
    } else if (category.includes('Extracurricular Activities')) {
        return <MdOutlineSchool color="#6b7280" />; // Gray
    } else if (category.includes('Food Services')) {
        return <MdOutlineFastfood color="#6b7280" />; // Gray
    } else if (category.includes('Maintenance')) {
        return <MdOutlineBusiness color="#6b7280" />; // Gray
    } else if (category.includes('Scholarships')) {
        return <MdOutlineSchool color="#6b7280" />; // Gray
    } else if (category.includes('Fundraising')) {
        return <HiOutlineTrash color="#6b7280" />; // Gray
    } else if (category.includes('Uncategorized')) {
        return <RxMix color="#6b7280" />; // Gray
    } else {
        return <MdAllInclusive color="#6b7280" />; // Gray
    }
};
