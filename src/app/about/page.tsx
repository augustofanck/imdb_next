import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import FooterItem from "@/components/FooterItem";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-3 space-y-4 text-justify">
        <h1 className="text-2xl font-medium text-amber-600">Sobre</h1>
        <p>
            Bem-vindo ao nosso site de banco de dados de filmes! Somos uma equipe de entusiastas de cinema apaixonados que se uniram para criar um destino único para todas as suas necessidades relacionadas a filmes.
        </p>

        <p>
            Nosso site foi projetado para fornecer a você um banco de dados abrangente de filmes de todo o mundo, juntamente com as últimas notícias, resenhas e trailers. Nosso banco de dados de filmes é constantemente atualizado com novos lançamentos, garantindo que você tenha acesso ao que há de mais recente e melhor no mundo do cinema. Você pode procurar filmes por título, diretor, ator, gênero ou data de lançamento, tornando fácil encontrar o filme perfeito para qualquer ocasião.
        </p>

        <p>
            Além do nosso extenso banco de dados de filmes, também oferecemos uma plataforma para os amantes de cinema se conectarem e compartilharem suas opiniões sobre os últimos lançamentos. Nossa seção de comunidade inclui um fórum onde você pode discutir seus filmes favoritos com indivíduos que pensam como você e ler resenhas e avaliações de outros usuários. Também temos uma seção dedicada a notícias e trailers de filmes, mantendo você atualizado com as últimas novidades do mundo do cinema.
            Obrigado por visitar nosso site e esperamos que você aproveite seu tempo navegando pelo nosso banco de dados de filmes. Se você tiver algum feedback ou sugestão, por favor, sinta-se à vontade para nos contatar. Estamos sempre buscando maneiras de melhorar e aprimorar a experiência do usuário em nosso site.
        </p>
        <p>
            O site faz parte de um projeto experimental sobre o estudo de utilização e desenvolvimento de um web-software. Buscando desenvolver e aprimorar habilidades como desenvolvedor front-end, disponibilizei este site como forma de portfólio em meu currículo. Nele, realizei alguns estudos referentes à interface de usuário e experiência de usuário (UI/UX).
        </p>
        <p>
            Entre em contato pelas redes sociais abaixo! Disponibilizo meu GitHub com demais projetos abaixo.
        </p>
        <div className="flex justify-center space-x-2">
            <FooterItem title="GitHub" address="https://github.com/augustofanck" Icon={FaGithub}/>
            <FooterItem title="LinkedIn" address="https://linkedin.com/in/augustofanck" Icon={FaLinkedin}/>
            <FooterItem title="Instagram" address="https://instagram.com/agstt1" Icon={FaInstagram}/>
        </div>
    </div>
  )
}
