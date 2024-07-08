import './globals.css';
import s from './homepage.module.css';
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home({searchParams}) {
    const page = parseInt(searchParams.page) || 1;
    return (
        <>
            <div className={s.container}>
                <Featured/>
                <CategoryList/>
                <div className={s.content}>
                    <CardList page={page}/>
                    <Menu/>
                </div>
            </div>
        </>
    );
}
