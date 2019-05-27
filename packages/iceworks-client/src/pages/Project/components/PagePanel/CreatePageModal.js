import React from 'react';
import PropTypes from 'prop-types';
import mockData from '@src/mock';
import stores from '@stores';
import Modal from '@components/Modal';
import useModal from '@hooks/useModal';
import useSocket from '@hooks/useSocket';
import pageStores from '../../stores';
import SavePageModel from './SavePageModel';
import styles from './CreatePageModal.module.scss';

// TODO
const pageData = {
  blocks: mockData.blocks,
  layout: mockData.layout,
};

const CreatePageModal = ({
  on, onCancel, onOk,
}) => {
  const {
    on: onSaveModel,
    toggleModal: toggleSaveModal,
  } = useModal();
  const [page] = pageStores.useStores(['page']);
  const [progress] = stores.useStores(['progress']);
  function onClose() {
    onCancel();
  }

  async function onCloseSaveModel() {
    await progress.hide();
    toggleSaveModal();
  }

  function onCreateOk() {
    page.setData(pageData);
    toggleSaveModal();
  }

  async function onSaveOk(data) {
    await progress.show({ statusText: '开始创建页面..' });
    await onOk({
      ...page.dataSource,
      ...data,
    });
    await progress.hide();
    toggleSaveModal();
  }

  useSocket('project.page.create.status', ({ text, percent }) => {
    progress.show({ statusText: text, percent });
  });

  return (
    <div>
      <Modal
        title="创建页面"
        visible={on}
        onCancel={onClose}
        onOk={onCreateOk}
      >
        <div className={styles.wrap}>
          测试的搭建页面
        </div>
      </Modal>
      <SavePageModel
        on={onSaveModel}
        onCancel={onCloseSaveModel}
        onOk={onSaveOk}
      />
    </div>
  );
};

CreatePageModal.propTypes = {
  on: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
};

export default CreatePageModal;
