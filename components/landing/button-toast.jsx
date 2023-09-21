import { ButtonGroup, Button } from 'react-bootstrap';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ButtonToast = () => {
    return <ButtonGroup aria-label="Basic toast examples" title='Basic toast examples'>
        <Button size='sm' onClick={() => Notify.success('Success')} variant="success"> OK</Button>
        <Button size='sm' onClick={() => Notify.warning('Warning')} variant="warning"> meh</Button>
        <Button size='sm' onClick={() => Notify.failure('Failure')} variant="danger"> KO</Button>
    </ButtonGroup>;
};

export default ButtonToast;
