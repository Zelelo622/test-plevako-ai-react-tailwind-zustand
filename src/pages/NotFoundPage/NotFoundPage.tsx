import { ReactElement } from "react";
import { Link } from "@tanstack/react-router";

const NotFoundPage = (): ReactElement => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Страница не найдена</p>
      <Link to="/" className="text-blue-600 hover:underline text-lg">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
