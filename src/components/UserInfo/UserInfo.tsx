import usersFromServer from '../../api/users';
import { User } from '../../types/User';
import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo;
}

export const UserInfo: React.FC<Props> = ({ todo }) => {
  const user = usersFromServer.find((x: User) => x.id === todo.userId) as User;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
