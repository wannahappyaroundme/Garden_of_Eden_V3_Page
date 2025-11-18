/**
 * Custom hook for managing Coming Soon modal state
 * Simplifies modal state management across pages
 */

import { useState } from 'react';

export function useComingSoonModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
    setIsModalOpen,
  };
}
