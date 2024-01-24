import { NaBaseButton } from '@/components/NaBaseButton';
import { addNotification } from '@/components/NaNotifications';

export const UiNaNotifications = () => {
  const propsAddNotification = {
    title: 'Title',
    message: ['message1', 'message2'],
  };

  return (
    <section className="mt-4">
      <h2 className="font-medium">NaNotifications</h2>
      <div className="mt-2">
        <NaBaseButton
          color="info"
          onClick={() => addNotification({ ...propsAddNotification, color: 'info' })}
          className="mr-2"
        >
          Info
        </NaBaseButton>
        <NaBaseButton
          color="success"
          onClick={() => addNotification({ ...propsAddNotification, color: 'success' })}
          className="mr-2"
        >
          Success
        </NaBaseButton>
        <NaBaseButton
          color="warning"
          onClick={() => addNotification({ ...propsAddNotification, color: 'warning' })}
          className="mr-2"
        >
          Warning
        </NaBaseButton>
        <NaBaseButton
          color="danger"
          onClick={() => addNotification({ ...propsAddNotification, color: 'danger' })}
          className="mr-2"
        >
          Danger
        </NaBaseButton>
        <NaBaseButton
          color="info"
          onClick={() => addNotification({ ...propsAddNotification, color: 'info', loading: true })}
        >
          Loading
        </NaBaseButton>
      </div>
    </section>
  );
};
