// import Button from '../../../components/button/Button';
import {
  Button,
  Counter,
  Navbar,
  NavLink,
  SlideAnimation,
  Link,
  Input,
} from '../../components';

import { Search16Filled } from '@fluentui/react-icons';
import reactSvg from '../../assets/react.svg';

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
      <div style={{ position: 'relative' }}>
        <Navbar style={{ position: 'unset', translate: '0 50%' }} />
      </div>

      <h2 className="heading-small">Slide Animation:</h2>
      <SlideAnimation>
        <p className="body-base">
          Refresh to play Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Eaque molestias asperiores hic sapiente odio! Nulla ab ipsa
          tempora est deleniti incidunt beatae cum facilis, ullam cumque minus
          aspernatur quibusdam suscipit sed optio rerum dolores! Ipsa eveniet
          quo unde, natus labore cum repudiandae nisi eligendi commodi ex.
          Facilis excepturi blanditiis dolor, beatae iure aut deserunt, sed
          quibusdam dolorem at tempore magnam perspiciatis eius inventore ipsa
          earum est. Quae eveniet, a consequuntur officia, delectus, est
          necessitatibus nesciunt magni esse asperiores quaerat. Nisi numquam
          rerum magnam optio laboriosam. Autem expedita unde aliquam ducimus
          tenetur cumque dolor eos ratione in placeat asperiores, quibusdam
          magni!
        </p>
      </SlideAnimation>

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
