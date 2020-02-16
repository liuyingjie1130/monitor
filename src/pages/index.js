import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { Button} from 'antd';
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
      <Button type="danger">蛋蛋</Button>
      <Button type="danger">老大</Button>
      <Button type="danger">墩墩</Button>
    </div>
  );
}
