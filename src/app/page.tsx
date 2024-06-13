import Image from "next/image";
import LoginForm from "./components/LoginForm";
import background from '/projetosReact/gerenc-task/public/estee-janssens-aQfhbxailCs-unsplash.jpg';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative w-full">
        <div className="fixed -z-10 w-full">
        <Image
        className="w-full"
        src={background} 
        alt={"background"}  
        width={1000}
        height={1000}    
      />
        </div>
      </div>

        <LoginForm/>
      
    </main>
  );
}
