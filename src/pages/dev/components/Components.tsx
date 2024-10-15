// import Button from '../../../components/button/Button';
import { Search16Filled } from '@fluentui/react-icons';
import Button from '../../../components/button';
import Counter from '../../../components/counter';

function Components() {
  return (
    <>
      <h1 className="title-medium">Components</h1>

      <div>
        <h2 className="heading-small">Counter Label:</h2>
        <Counter count={0} />
      </div>

      <Button leftIcon={<Search16Filled />} status="simple" />
      <Button leftIcon={<Search16Filled />} />
      <Button leftIcon={<Search16Filled />} status="rest" />
      <Button leftIcon={<Search16Filled />} status="selected" />
      <Button leftIcon={<Search16Filled />} status="disabled" />

      <Button leftIcon={<Search16Filled />} status="simple" variant="primary" />
      <Button leftIcon={<Search16Filled />} variant="primary" />
      <Button leftIcon={<Search16Filled />} status="rest" variant="primary" />
      <Button
        leftIcon={<Search16Filled />}
        status="selected"
        variant="primary"
      />
      <Button
        leftIcon={<Search16Filled />}
        status="disabled"
        variant="primary"
      />

      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <div className="heading-small">Button:</div>

        <Button
          label="Button"
          status="simple"
          leftIcon={<Search16Filled />}
          rightIcon={<Share16Filled />}
          margin
        />
        <Button
          count={0}
          label="Button"
          status="ghost"
          leftIcon={<Search16Filled />}
          rightIcon={<Share16Filled />}
          margin
          border="small"
        />
        <Button
          count={0}
          label="Button"
          status="rest"
          leftIcon={<Search16Filled />}
          rightIcon={<Share16Filled />}
          margin
        />
        <Button
          count={0}
          label="Button"
          status="selected"
          leftIcon={<Search16Filled />}
          rightIcon={<Share16Filled />}
        />
        <Button
          count={0}
          label="Button"
          status="disabled"
          leftIcon={<Search16Filled />}
          rightIcon={<Share16Filled />}
        />
      </div> */}
    </>
  );
}

export default Components;
