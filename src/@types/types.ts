// Definindo os tipos para os dados da tabela
export interface Conveniado {
    id: number;
    conveniado: string;
    convenio: string;
    grupoConvenio: string;
    statusConveniado: string;
    matricula: string;
    valorLimite: string;
  }
  
  // Definindo os tipos para as propriedades do modal de inclusão
  export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  