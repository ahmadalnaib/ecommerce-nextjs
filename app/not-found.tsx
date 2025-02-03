'use client';
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return ( <div className="flex flex-col items-center justify-center min-h-screen">
    <Image src="/images/logo.svg" alt="404" width={48} height={48}/>
  <div className="p-6 rounded-lg shadow-md text-center w-1/3">
  <h1 className="text-2xl font-semibold">404 - Not Found</h1>
  <p className="text-gray-500">The page you are looking for does not exist.</p>
  <Button variant="outline" className="mt-4" onClick={() => (window.location.href = '/')}>
  Go back to {APP_NAME}
</Button>
  </div>
  </div> );
}


export default NotFoundPage;