import { useTranslations } from "next-intl";
import { SignIn } from "./components/signInButton";

export default function Home() {

  const t = useTranslations('HomePage');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
            <h1 className="text-9xl">{t('title')}</h1>
            <SignIn />
            
      </div>
    </main>
  );
}
