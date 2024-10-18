// import Button from '../../../components/button/Button';
import Button from '../../../components/button';
import Counter from '../../../components/counter';
import Navbar from '../../../components/navbar';
import NavLink from '../../../components/navLink';
import Slide from '../../../components/animation/slide';

import { Search16Filled } from '@fluentui/react-icons';
import reactSvg from '../../../assets/react.svg';
import Link from '../../../components/link';
import Input from '../../../components/input';

function Components() {
  return (
    <>
      <h1 className="title-medium">Components</h1>

      <div>
        <h2 className="heading-small">Counter Label:</h2>
        <Counter count={0} />
      </div>

      <div>
        <h2 className="heading-small">Button:</h2>
        <Button
          leftIcon={<Search16Filled />}
          status="simple"
          count={12}
          label="button"
        />
        <Button
          leftIcon={<img src={reactSvg} alt="react" width={16} />}
          count={12}
          label="button"
        />
        <Button
          leftIcon={<Search16Filled />}
          status="rest"
          count={12}
          label="button"
        />
        <Button
          leftIcon={<Search16Filled />}
          status="selected"
          count={12}
          label="button"
        />
        <Button
          leftIcon={<Search16Filled />}
          status="disabled"
          count={12}
          label="button"
        />

        <Button
          leftIcon={<Search16Filled />}
          status="simple"
          count={12}
          label="button"
          variant="primary"
        />
        <Button
          leftIcon={<Search16Filled />}
          count={12}
          label="button"
          variant="primary"
        />
        <Button
          leftIcon={<Search16Filled />}
          status="rest"
          count={12}
          label="button"
          variant="primary"
        />
        <Button
          leftIcon={<Search16Filled />}
          status="selected"
          count={12}
          label="button"
          variant="primary"
        />
        <Button
          leftIcon={<Search16Filled />}
          status="disabled"
          count={12}
          label="button"
          variant="primary"
        />
      </div>

      <h2 className="heading-small">NavLink:</h2>
      <NavLink to={'/dev/components'} label="Components" />

      <h2 className="heading-small">Link:</h2>
      <Link to={'/'}>Home</Link>

      <h2 className="heading-small">Navbar:</h2>
      <Navbar />

      <h2 className="heading-small">Slide Animation:</h2>
      <Slide>
        <p className="body-base">Refresh to play</p>
      </Slide>

      <h2 className="heading-small">Input:</h2>
      <Input
        label="Label"
        leftButton={{
          leftIcon: <Search16Filled />,
        }}
      />
      <Input
        label="Label"
        leftButton={{
          leftIcon: <Search16Filled />,
        }}
        validation={{
          state: 'error',
        }}
        style={{
          width: '10rem',
        }}
        placeholder="wow"
        id="input-1"
      />
      <Input
        label="Label"
        type="password"
        validation={{
          state: 'success',
        }}
        id="password"
      />
      <Input label="Label" type="password" disabled id="password-1" />
      <Input
        label="Label"
        leftButton={{
          leftIcon: <Search16Filled />,
        }}
        id="input-2"
        disabled
      />
    </>
  );
}

export default Components;
