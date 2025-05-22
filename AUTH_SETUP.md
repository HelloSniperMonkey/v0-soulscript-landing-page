# SoulScript - Clerk Authentication

## Authentication Setup

This project uses [Clerk](https://clerk.dev/) for authentication. Follow these steps to set up authentication:

1. Sign up for a Clerk account at https://clerk.dev/
2. Create a new application in the Clerk Dashboard
3. Configure your application:
   - Add the domains you'll be using (localhost for development)
   - Configure sign-in and sign-up options
   - Set up social connections if needed

4. Get your API keys from the Clerk Dashboard:
   - Find your Publishable Key and Secret Key

5. Create a `.env.local` file in the root of your project by copying the `.env.local.example` file:
   ```
   cp .env.local.example .env.local
   ```

6. Update the `.env.local` file with your actual Clerk API keys:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your-publishable-key
   CLERK_SECRET_KEY=sk_test_your-secret-key
   ```

## Authentication Features

- **Sign In / Sign Up**: Pre-built pages at `/sign-in` and `/sign-up`
- **User Profile**: Access your profile at `/profile`
- **Protected Routes**: The following routes require authentication:
  - `/persona-dashboard`
  - `/profile`
  - `/journal`

## Using Authentication in Components

You can use the auth context in your components:

```tsx
import { useAuth } from "@/context/auth-context"

export default function MyComponent() {
  const { isLoggedIn, user, login, logout, userButton } = useAuth()
  
  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome, {user?.firstName}!</p>
          <button onClick={logout}>Sign Out</button>
        </>
      ) : (
        <button onClick={login}>Sign In</button>
      )}
    </div>
  )
}
```

## Protecting Routes

To protect a route, wrap the component with the `AuthRequired` component:

```tsx
import AuthRequired from "@/components/auth-required"

export default function ProtectedPage() {
  return (
    <AuthRequired>
      <div>This content is only visible to authenticated users</div>
    </AuthRequired>
  )
}
```
