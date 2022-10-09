import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "me@email.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize(credentials, req) {
        const { email, password } = credentials;
        // Peform login
        // find out user from db
        if (email !== "john@gmail.com" && password !== "1234") {
          return null;
        }

        return {
          id: 1,
          name: "John Doe",
          email: "john@gmail.com",
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({token, user}) => {
      if(user){
        token.id = user.id
      }
      return token
    },
    session: ({session, token}) => {
      if(token){
        session.id = token.id
      }

      return session
    }
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true
  },
  // pages: {
  //   signIn: "/auth/signin",
  //   // error: "auth/error",
  //   // signOut: '/auth/signOut'
  // }
};

export default NextAuth(authOptions);
