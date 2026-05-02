import Image from "next/image";
import TopBreeds from '@/components/shared/Topbreeds';
import QurbaniTips from '@/components/shared/Tips';
import QurbaniTools from '@/components/shared/Qurbanitools';
import Header from '@/components/shared/Hero';
import Animalcards from '@/components/shared/Feturecards';
export default function Home() {
  return (
  <div>
    <Header/>
             <Animalcards/>
             <TopBreeds/>
             <QurbaniTools/>
             <QurbaniTips/>
  </div>
  );
}
