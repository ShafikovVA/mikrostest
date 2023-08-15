import { useDisclosure } from '@chakra-ui/react';
import { Brand } from './type';
import { BrandCard } from './brand-card';
import { BrandModal } from './brand-modal-info';
import { Modal } from '@/features/modal/modal';

interface BrandWithModalProps {
  data: Brand;
}

export const BrandWithModal = (props: BrandWithModalProps): JSX.Element => {
  const {
    data,
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BrandCard brandImg={`https://api.mikros74.ru${data.image}`} title={data.title} openModal={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <BrandModal
          description={data.description}
          brandTitle={data.title}
          tools={data.tools}
          brandImg={`https://api.mikros74.ru${data.image}`}
          catalog={data.document}
          certificate={data.certificate}
        />
      </Modal>
    </>
  );
};
