import { Link } from 'react-router';
import { PropsWithChildren } from 'react';

interface LinkComponentProps extends PropsWithChildren {
  url: string;
  external: boolean;
  target?: string;
  hasChildren?: boolean;
}

const LinkComponent = ({ children, url, external, target, hasChildren = false }: LinkComponentProps) => {
  if (external) {
    return (
      <a href={url} target='_blank' referrerPolicy='no-referrer'>
        {children}
      </a>
    );
  }

  return (
    <Link to={{ pathname: url, hash: target }} className={hasChildren ? undefined : 'navitem'}>
      {children}
    </Link>
  );
};

export default LinkComponent;
