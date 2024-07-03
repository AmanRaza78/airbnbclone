import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <nav className="flex justify-between items-center">
      <div>
        <h1 className="font-semibold">Airbnb Clone</h1>
      </div>

      {(await isAuthenticated()) ? (
        <div>
          <LogoutLink>
            <Button>Logout</Button>
          </LogoutLink>
        </div>
      ) : (
        <div className="flex gap-x-2">
          <RegisterLink>
            <Button>Register</Button>
          </RegisterLink>

          <LoginLink>
            <Button variant="secondary">Login</Button>
          </LoginLink>
        </div>
      )}
    </nav>
  );
}
