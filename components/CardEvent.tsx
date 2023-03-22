import Image from 'next/image';
import { FC } from 'react';

interface PropsComponent {
  cover_img: string;
  title: string;
  description: string;
  url: string;
  votes: number;
}

export const CardEvent: FC<PropsComponent> = ({
  cover_img,
  title,
  description,
  url,
  votes,
}) => {
  return (
    <div>
      <div>
        <Image
          src={cover_img}
          width={100}
          height={100}
          alt={`Portada de evento`}
        ></Image>
      </div>
      <div>
        <h3> {title} </h3>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          <li>
            <a href={url}>{url}</a>
          </li>
          <li>
            <i className="bx bx-user"></i>
            <span>{votes} votos</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
