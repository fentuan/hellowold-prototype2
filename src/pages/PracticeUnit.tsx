import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Volume2, Check, X, Info } from 'lucide-react'

interface Question {
  id: number
  type: 'image' | 'audio' | 'spelling'
  word: string
  meaning: string
  image: string
  options?: string[]
  correctAnswer: string
  explanation: string
}

const PracticeUnit: React.FC = () => {
  const { theme, stageId, unitId } = useParams<{ theme: string; stageId: string; unitId: string }>()
  const navigate = useNavigate()
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  // Reset state when unitId changes
  useEffect(() => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer('')
    setShowFeedback(false)
    setIsCorrect(false)
    setShowExplanation(false)
    setShowResults(false)
    setCorrectAnswers(0)
  }, [unitId])

  // Unit 1: 10 questions
  const unit1Questions: Question[] = [
    {
      id: 1,
      type: 'image',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
      options: ['dog', 'cat', 'bird'],
      correctAnswer: 'dog',
      explanation: 'This is a dog. Dogs are loyal animals that like to play fetch.'
    },
    {
      id: 2,
      type: 'spelling',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'cat',
      explanation: 'This is a cat. Cats are small, furry animals that like to chase mice.'
    },
    {
      id: 3,
      type: 'audio',
      word: 'bird',
      meaning: '鸟',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20bird%20cartoon%20style&image_size=square_hd',
      options: ['bird', 'fish', 'dog'],
      correctAnswer: 'bird',
      explanation: 'This is a bird. Birds have wings and can fly.'
    },
    {
      id: 4,
      type: 'image',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pig%20cartoon%20style&image_size=square_hd',
      options: ['pig', 'cat', 'dog'],
      correctAnswer: 'pig',
      explanation: 'This is a pig. Pigs are farm animals that like to eat.'
    },
    {
      id: 5,
      type: 'image',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
      options: ['cat', 'dog', 'bird'],
      correctAnswer: 'cat',
      explanation: 'This is a cat. Cats are small, furry animals that like to chase mice.'
    },
    {
      id: 6,
      type: 'spelling',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pig%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'pig',
      explanation: 'This is a pig. Pigs are farm animals that like to eat.'
    },
    {
      id: 7,
      type: 'audio',
      word: 'fish',
      meaning: '鱼',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20fish%20cartoon%20style&image_size=square_hd',
      options: ['fish', 'bird', 'pig'],
      correctAnswer: 'fish',
      explanation: 'This is a fish. Fish live in water and have gills to breathe.'
    },
    {
      id: 8,
      type: 'spelling',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'dog',
      explanation: 'This is a dog. Dogs are loyal animals that like to play fetch.'
    },
    {
      id: 9,
      type: 'image',
      word: 'fish',
      meaning: '鱼',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20fish%20cartoon%20style&image_size=square_hd',
      options: ['fish', 'cat', 'pig'],
      correctAnswer: 'fish',
      explanation: 'This is a fish. Fish live in water and have gills to breathe.'
    },
    {
      id: 10,
      type: 'audio',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pig%20cartoon%20style&image_size=square_hd',
      options: ['pig', 'dog', 'fish'],
      correctAnswer: 'pig',
      explanation: 'This is a pig. Pigs are farm animals that like to eat.'
    }
  ];

  // Unit 2: 11 questions, each word has all 3 types
  const unit2Questions: Question[] = [
    {
      id: 1,
      type: 'audio',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
      options: ['cat', 'dog', 'bird'],
      correctAnswer: 'dog',
      explanation: 'This is a dog. Dogs are loyal animals that like to play fetch.'
    },
    {
      id: 2,
      type: 'image',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
      options: ['dog', 'pig', 'cat'],
      correctAnswer: 'dog',
      explanation: 'This is a dog. Dogs are loyal animals that like to play fetch.'
    },
    {
      id: 3,
      type: 'spelling',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'dog',
      explanation: 'This is a dog. Dogs are loyal animals that like to play fetch.'
    },
    {
      id: 4,
      type: 'spelling',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'cat',
      explanation: 'This is a cat. Cats are small, furry animals that like to chase mice.'
    },
    {
      id: 5,
      type: 'image',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
      options: ['bird', 'cat', 'fish'],
      correctAnswer: 'cat',
      explanation: 'This is a cat. Cats are small, furry animals that like to chase mice.'
    },
    {
      id: 6,
      type: 'audio',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
      options: ['dog', 'cat', 'pig'],
      correctAnswer: 'cat',
      explanation: 'This is a cat. Cats are small, furry animals that like to chase mice.'
    },
    {
      id: 7,
      type: 'image',
      word: 'bird',
      meaning: '鸟',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20bird%20cartoon%20style&image_size=square_hd',
      options: ['bird', 'dog', 'cat'],
      correctAnswer: 'bird',
      explanation: 'This is a bird. Birds have wings and can fly.'
    },
    {
      id: 8,
      type: 'spelling',
      word: 'bird',
      meaning: '鸟',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20bird%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'bird',
      explanation: 'This is a bird. Birds have wings and can fly.'
    },
    {
      id: 9,
      type: 'audio',
      word: 'bird',
      meaning: '鸟',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20bird%20cartoon%20style&image_size=square_hd',
      options: ['pig', 'bird', 'fish'],
      correctAnswer: 'bird',
      explanation: 'This is a bird. Birds have wings and can fly.'
    },
    {
      id: 10,
      type: 'spelling',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pig%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'pig',
      explanation: 'This is a pig. Pigs are farm animals that like to eat.'
    },
    {
      id: 11,
      type: 'image',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pig%20cartoon%20style&image_size=square_hd',
      options: ['cat', 'dog', 'pig'],
      correctAnswer: 'pig',
      explanation: 'This is a pig. Pigs are farm animals that like to eat.'
    }
  ];

  // Unit 3: 13 questions, includes new animals (rabbit, duck, bear)
  const unit3Questions: Question[] = [
    // dog - all 3 types
    {
      id: 1,
      type: 'spelling',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'dog',
      explanation: 'This is a dog. Dogs are loyal animals that like to play fetch.'
    },
    {
      id: 2,
      type: 'audio',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
      options: ['cat', 'dog', 'bird'],
      correctAnswer: 'dog',
      explanation: 'This is a dog. Dogs are loyal animals that like to play fetch.'
    },
    // cat - all 3 types
    {
      id: 3,
      type: 'image',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
      options: ['dog', 'cat', 'pig'],
      correctAnswer: 'cat',
      explanation: 'This is a cat. Cats are small, furry animals that like to chase mice.'
    },
    {
      id: 4,
      type: 'spelling',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'cat',
      explanation: 'This is a cat. Cats are small, furry animals that like to chase mice.'
    },
    // bird - all 3 types
    {
      id: 5,
      type: 'audio',
      word: 'bird',
      meaning: '鸟',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20bird%20cartoon%20style&image_size=square_hd',
      options: ['bird', 'fish', 'duck'],
      correctAnswer: 'bird',
      explanation: 'This is a bird. Birds have wings and can fly.'
    },
    {
      id: 6,
      type: 'image',
      word: 'bird',
      meaning: '鸟',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20bird%20cartoon%20style&image_size=square_hd',
      options: ['bird', 'rabbit', 'cat'],
      correctAnswer: 'bird',
      explanation: 'This is a bird. Birds have wings and can fly.'
    },
    // pig - all 3 types
    {
      id: 7,
      type: 'spelling',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pig%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'pig',
      explanation: 'This is a pig. Pigs are farm animals that like to eat.'
    },
    {
      id: 8,
      type: 'audio',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pig%20cartoon%20style&image_size=square_hd',
      options: ['pig', 'bear', 'dog'],
      correctAnswer: 'pig',
      explanation: 'This is a pig. Pigs are farm animals that like to eat.'
    },
    // rabbit - NEW animal, all 3 types
    {
      id: 9,
      type: 'image',
      word: 'rabbit',
      meaning: '兔子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20rabbit%20bunny%20cartoon%20style&image_size=square_hd',
      options: ['cat', 'rabbit', 'dog'],
      correctAnswer: 'rabbit',
      explanation: 'This is a rabbit. Rabbits have long ears and like to eat carrots.'
    },
    {
      id: 10,
      type: 'spelling',
      word: 'rabbit',
      meaning: '兔子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20rabbit%20bunny%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'rabbit',
      explanation: 'This is a rabbit. Rabbits have long ears and like to eat carrots.'
    },
    {
      id: 11,
      type: 'audio',
      word: 'rabbit',
      meaning: '兔子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20rabbit%20bunny%20cartoon%20style&image_size=square_hd',
      options: ['duck', 'bird', 'rabbit'],
      correctAnswer: 'rabbit',
      explanation: 'This is a rabbit. Rabbits have long ears and like to eat carrots.'
    },
    // duck - NEW animal, 2 types
    {
      id: 12,
      type: 'image',
      word: 'duck',
      meaning: '鸭子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20duck%20cartoon%20style&image_size=square_hd',
      options: ['duck', 'bird', 'fish'],
      correctAnswer: 'duck',
      explanation: 'This is a duck. Ducks like to swim in water and say "quack".'
    },
    {
      id: 13,
      type: 'audio',
      word: 'duck',
      meaning: '鸭子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20duck%20cartoon%20style&image_size=square_hd',
      options: ['duck', 'pig', 'rabbit'],
      correctAnswer: 'duck',
      explanation: 'This is a duck. Ducks like to swim in water and say "quack".'
    }
  ];

  // Unit 4: Radio style questions (pure listening mode)
  const unit4Questions: Question[] = [
    // Radio segment 1: About animals
    {
      id: 1,
      type: 'audio',
      word: 'animals',
      meaning: '动物',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      options: ['animals', 'colors', 'fruits'],
      correctAnswer: 'animals',
      explanation: 'The radio program is talking about different animals and their habits.'
    },
    {
      id: 2,
      type: 'spelling',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'cat',
      explanation: 'Cats are small, furry animals that like to chase mice.'
    },
    {
      id: 3,
      type: 'audio',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      options: ['cat', 'dog', 'bird'],
      correctAnswer: 'dog',
      explanation: 'Dogs are loyal animals that like to play fetch.'
    },
    // Radio segment 2: About pets
    {
      id: 4,
      type: 'audio',
      word: 'pets',
      meaning: '宠物',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      options: ['pets', 'food', 'toys'],
      correctAnswer: 'pets',
      explanation: 'The radio program is discussing popular pets and how to take care of them.'
    },
    {
      id: 5,
      type: 'spelling',
      word: 'bird',
      meaning: '鸟',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'bird',
      explanation: 'Birds have wings and can fly.'
    },
    {
      id: 6,
      type: 'audio',
      word: 'rabbit',
      meaning: '兔子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      options: ['rabbit', 'duck', 'pig'],
      correctAnswer: 'rabbit',
      explanation: 'Rabbits have long ears and like to eat carrots.'
    },
    // Radio segment 3: Animal sounds
    {
      id: 7,
      type: 'audio',
      word: 'sounds',
      meaning: '声音',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      options: ['sounds', 'colors', 'shapes'],
      correctAnswer: 'sounds',
      explanation: 'The radio program is playing different animal sounds for listeners to guess.'
    },
    {
      id: 8,
      type: 'spelling',
      word: 'duck',
      meaning: '鸭子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'duck',
      explanation: 'Ducks like to swim in water and say "quack".'
    },
    {
      id: 9,
      type: 'audio',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      options: ['pig', 'dog', 'cat'],
      correctAnswer: 'pig',
      explanation: 'Pigs are farm animals that like to eat.'
    },
    // Radio segment 4: Animal habitats
    {
      id: 10,
      type: 'audio',
      word: 'habitats',
      meaning: '栖息地',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      options: ['habitats', 'food', 'toys'],
      correctAnswer: 'habitats',
      explanation: 'The radio program is talking about where different animals live.'
    },
    {
      id: 11,
      type: 'spelling',
      word: 'fish',
      meaning: '鱼',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'fish',
      explanation: 'Fish live in water and have gills to breathe.'
    },
    {
      id: 12,
      type: 'audio',
      word: 'bear',
      meaning: '熊',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      options: ['bear', 'rabbit', 'duck'],
      correctAnswer: 'bear',
      explanation: 'Bears are large animals that hibernate in winter.'
    },
    {
      id: 13,
      type: 'spelling',
      word: 'bear',
      meaning: '熊',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radio%20broadcast%20studio%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'bear',
      explanation: 'Bears are large animals that hibernate in winter.'
    }
  ];

  // Unit 5: Boss battle - 10 questions including all words from previous units
  const unit5Questions: Question[] = [
    // Question 1: Image type - dog
    {
      id: 1,
      type: 'image',
      word: 'dog',
      meaning: '狗',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20dog%20cartoon%20style&image_size=square_hd',
      options: ['dog', 'cat', 'pig'],
      correctAnswer: 'dog',
      explanation: 'Dogs are loyal animals that like to play fetch.'
    },
    // Question 2: Spelling type - cat
    {
      id: 2,
      type: 'spelling',
      word: 'cat',
      meaning: '猫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cat%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'cat',
      explanation: 'Cats are small, furry animals that like to chase mice.'
    },
    // Question 3: Audio type - bird
    {
      id: 3,
      type: 'audio',
      word: 'bird',
      meaning: '鸟',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20bird%20cartoon%20style&image_size=square_hd',
      options: ['bird', 'fish', 'duck'],
      correctAnswer: 'bird',
      explanation: 'Birds have wings and can fly.'
    },
    // Question 4: Image type - rabbit
    {
      id: 4,
      type: 'image',
      word: 'rabbit',
      meaning: '兔子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20rabbit%20bunny%20cartoon%20style&image_size=square_hd',
      options: ['rabbit', 'cat', 'dog'],
      correctAnswer: 'rabbit',
      explanation: 'Rabbits have long ears and like to eat carrots.'
    },
    // Question 5: Spelling type - duck
    {
      id: 5,
      type: 'spelling',
      word: 'duck',
      meaning: '鸭子',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20duck%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'duck',
      explanation: 'Ducks like to swim in water and say "quack".'
    },
    // Question 6: Audio type - pig
    {
      id: 6,
      type: 'audio',
      word: 'pig',
      meaning: '猪',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20pig%20cartoon%20style&image_size=square_hd',
      options: ['pig', 'dog', 'bear'],
      correctAnswer: 'pig',
      explanation: 'Pigs are farm animals that like to eat.'
    },
    // Question 7: Image type - fish
    {
      id: 7,
      type: 'image',
      word: 'fish',
      meaning: '鱼',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20fish%20cartoon%20style&image_size=square_hd',
      options: ['fish', 'bird', 'duck'],
      correctAnswer: 'fish',
      explanation: 'Fish live in water and have gills to breathe.'
    },
    // Question 8: Spelling type - bear
    {
      id: 8,
      type: 'spelling',
      word: 'bear',
      meaning: '熊',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20bear%20cartoon%20style&image_size=square_hd',
      correctAnswer: 'bear',
      explanation: 'Bears are large animals that hibernate in winter.'
    },
    // Question 9: Audio type - animals
    {
      id: 9,
      type: 'audio',
      word: 'animals',
      meaning: '动物',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cartoon%20animals%20gathering&image_size=square_hd',
      options: ['animals', 'pets', 'sounds'],
      correctAnswer: 'animals',
      explanation: 'Animals are living creatures that can move and eat.'
    },
    // Question 10: Spelling type - pets
    {
      id: 10,
      type: 'spelling',
      word: 'pets',
      meaning: '宠物',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cartoon%20pets%20cat%20and%20dog&image_size=square_hd',
      correctAnswer: 'pets',
      explanation: 'Pets are animals that people keep at home as companions.'
    }
  ];

  // Select questions based on unitId
  const getQuestions = () => {
    const unitNum = parseInt(unitId || '1')
    if (unitNum === 2) return unit2Questions
    if (unitNum === 3) return unit3Questions
    if (unitNum === 4) return unit4Questions
    if (unitNum === 5) return unit5Questions
    return unit1Questions
  }
  
  const questions = getQuestions()

  const currentQuestion = questions[currentQuestionIndex]

  // Add loading state if currentQuestion is undefined
  if (!currentQuestion) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-sm text-gray-600">加载中...</p>
          </div>
        </div>
      </div>
    )
  }

  const handleBackClick = () => {
    if (window.confirm('确定要返回单元菜单吗？当前进度将不会被保存。')) {
      // 使用 replace: true 替换导航历史，确保单元菜单的返回按钮能正确返回上一级
      navigate(`/practice/${theme}/stage/${stageId}`, { replace: true })
    }
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleSubmitAnswer = () => {
    let correct = false;
    if (currentQuestion.type === 'spelling') {
      // For spelling questions, check if the selected letter matches the missing letter
      const missingIndexMap: Record<string, number> = {
        'cat': 1,
        'dog': 1,
        'pig': 2,
        'rabbit': 2, // missing 'b'
        'duck': 1,   // missing 'u'
        'bird': 2,   // missing 'r'
        'fish': 2,   // missing 's'
        'bear': 1,   // missing 'e'
        'animals': 2, // missing 'i'
        'pets': 1,   // missing 'e'
        'sounds': 2, // missing 'u'
        'habitats': 3 // missing 'i'
      };
      const missingIndex = missingIndexMap[currentQuestion.correctAnswer] || 1;
      
      const correctLetter = currentQuestion.correctAnswer[missingIndex];
      correct = selectedAnswer === correctLetter;
    } else {
      // For other question types, check if the selected answer matches the correct answer
      correct = selectedAnswer === currentQuestion.correctAnswer;
    }
    setIsCorrect(correct)
    if (correct) {
      setCorrectAnswers(prev => prev + 1)
    }
    setShowFeedback(true)
  }

  const handleContinue = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer('')
      setShowFeedback(false)
      setShowExplanation(false)
    } else {
      // Show results for all units
      setShowResults(true)
    }
  }

  const handleNextUnit = () => {
    const currentUnitId = parseInt(unitId || '1')
    
    if (currentUnitId === 4) {
      // Unit 4 completed, ask if user wants to challenge boss
      if (window.confirm('恭喜完成单元四！准备挑战守关大将吗？')) {
        navigate(`/practice/${theme}/stage/${stageId}/unit/5`)
      } else {
        navigate(`/practice/${theme}/stage/${stageId}`)
      }
    } else if (currentUnitId < 4) {
      // Navigate to next unit
      const nextUnitId = currentUnitId + 1
      navigate(`/practice/${theme}/stage/${stageId}/unit/${nextUnitId}`)
    } else {
      // After 4 units or boss, go back to stage page
      navigate(`/practice/${theme}/stage/${stageId}`)
    }
  }

  const handleBackToStage = () => {
    navigate(`/practice/${theme}/stage/${stageId}`)
  }

  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  const handleCloseExplanation = () => {
    setShowExplanation(false)
  }

  const handlePlayPronunciation = () => {
    // In a real app, this would play the pronunciation
    console.log('Playing pronunciation for', currentQuestion.word)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="w-[320px] h-[320px] mx-auto my-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 px-3 py-2 flex items-center justify-between text-white flex-shrink-0">
          <button
            className="p-2 rounded-full hover:bg-white/20 active:scale-95"
            onClick={handleBackClick}
          >
            <ArrowLeft size={20} />
          </button>
          <div className="text-center">
            <h1 className="text-base font-bold">{parseInt(unitId || '1') === 5 ? '守关大将' : `单元 ${unitId}`}</h1>
            <p className="text-xs">{currentQuestionIndex + 1}/{questions.length}</p>
          </div>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        {/* Question Content */}
        <div className="flex-1 px-4 pb-8 pt-4 overflow-y-auto scroll-smooth" style={{ maxHeight: '240px' }}>
          {showResults ? (
            <>
              {/* Results Page */}
              <div className="flex flex-col items-center justify-center h-full">
                {parseInt(unitId || '1') === 5 ? (
                  <>
                    {/* Boss Battle Results */}
                    <div className="text-4xl mb-4">
                      {correctAnswers >= 10 ? '🏆' : correctAnswers >= 7 ? '🌟' : '💪'}
                    </div>
                    <h2 className="text-lg font-bold mb-2">守关大将挑战完成！</h2>
                    <div className="mb-4">
                      <span className={`text-3xl font-bold ${
                        correctAnswers >= 10 ? 'text-yellow-500' : 
                        correctAnswers >= 7 ? 'text-blue-500' : 'text-gray-500'
                      }`}>
                        {correctAnswers >= 10 ? 'A级' : 
                         correctAnswers >= 7 ? 'B级' : 'C级'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 text-center">
                      答对 {correctAnswers} 题，共 {questions.length} 题
                    </p>
                    {correctAnswers >= 10 && (
                      <p className="text-sm text-yellow-600 mb-4 text-center">🎉 获得1颗小星星！</p>
                    )}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                      <div 
                        className={`h-2 rounded-full ${
                          correctAnswers >= 10 ? 'bg-yellow-400' : 
                          correctAnswers >= 7 ? 'bg-blue-400' : 'bg-gray-400'
                        }`}
                        style={{ width: `${(correctAnswers / questions.length) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm mb-6 text-center">
                      {correctAnswers >= 10 ? '太棒了！满分通关！' : 
                       correctAnswers >= 7 ? '不错！再接再厉！' : 
                       '继续努力，争取更好成绩！'}
                    </p>
                  </>
                ) : (
                  <>
                    {/* Normal Unit Results */}
                    <div className="text-4xl mb-4 text-green-500">🎉</div>
                    <h2 className="text-lg font-bold mb-2">完成练习！</h2>
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      你答对了 {correctAnswers} 题，共 {questions.length} 题
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                        style={{ width: `${(correctAnswers / questions.length) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm mb-6 text-center">
                      {correctAnswers >= questions.length * 0.8 ? '太棒了！你做得非常好！' : 
                       correctAnswers >= questions.length * 0.6 ? '不错！继续加油！' : 
                       '继续努力，你会做得更好的！'}
                    </p>
                  </>
                )}
                
                {/* Buttons */}
                <div className="w-full space-y-3">
                  {parseInt(unitId || '1') !== 5 && (
                    <button
                      className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-bold active:scale-95"
                      onClick={handleNextUnit}
                    >
                      继续答题
                    </button>
                  )}
                  <button
                    className="w-full py-3 bg-blue-100 text-blue-700 rounded-lg font-medium active:scale-95"
                    onClick={handleBackToStage}
                  >
                    返回关卡
                  </button>
                </div>
              </div>
            </>
          ) : !showFeedback ? (
            <>
              {/* Question */}
              <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">{currentQuestion.type === 'spelling' ? '拼写单词' : '选择正确答案'}</h2>
                <p className="text-sm text-gray-600 mb-4">{currentQuestion.meaning}</p>
              </div>

              {/* Image - only show for non-audio type questions */}
              {currentQuestion.type !== 'audio' && (
                <div className="flex justify-center mb-4">
                  <img 
                    src={currentQuestion.image} 
                    alt={currentQuestion.word} 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              )}

              {/* Audio for audio type questions */}
              {currentQuestion.type === 'audio' && (
                <div className="flex flex-col items-center mb-4">
                  <p className="text-sm text-gray-600 mb-3">{currentQuestion.meaning}</p>
                  <button
                    className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center active:scale-95"
                    onClick={handlePlayPronunciation}
                  >
                    <Volume2 size={32} className="text-white" />
                  </button>
                  <p className="text-xs text-gray-500 mt-2">点击播放发音</p>
                </div>
              )}

              {/* Options */}
              {currentQuestion.type !== 'spelling' && currentQuestion.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full py-3 rounded-lg text-left px-4 active:scale-95 transition-all duration-300 ${
                        selectedAnswer === option 
                          ? 'bg-green-100 border-2 border-green-500' 
                          : 'bg-gray-50 border border-gray-200'
                      }`}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Spelling input with missing letters */}
              {currentQuestion.type === 'spelling' && (
                <div className="mb-6">
                  {/* Word with missing letters */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {(() => {
                      const word = currentQuestion.word;
                      const letters = word.split('');
                      // Define missing letter index for each word
                      const missingIndexMap: Record<string, number> = {
                        'cat': 1,
                        'dog': 1,
                        'pig': 2,
                        'rabbit': 2, // missing 'b'
                        'duck': 1,   // missing 'u'
                        'bird': 2,   // missing 'r'
                        'fish': 2,   // missing 's'
                        'bear': 1,   // missing 'e'
                        'animals': 2, // missing 'i'
                        'pets': 1,   // missing 'e'
                        'sounds': 2, // missing 'u'
                        'habitats': 3 // missing 'i'
                      };
                      const missingIndex = missingIndexMap[word] || 1;
                      
                      return letters.map((letter, index) => (
                        <div 
                          key={index} 
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${index === missingIndex ? 'bg-gray-100 border-2 border-dashed border-gray-300' : 'bg-green-100 text-green-700 font-bold'}`}
                        >
                          {index === missingIndex ? (selectedAnswer || '_') : letter}
                        </div>
                      ));
                    })()}
                  </div>
                  
                  {/* Letter options */}
                  <div className="flex justify-center space-x-3">
                    {(() => {
                      const optionsMap: Record<string, string[]> = {
                        'cat': ['e', 'o', 'a'],
                        'pig': ['e', 'o', 'g'],
                        'dog': ['o', 'a', 'e'],
                        'rabbit': ['a', 'b', 'c'], // correct: 'b'
                        'duck': ['u', 'a', 'o'],   // correct: 'u'
                        'bird': ['r', 'a', 'e'],   // correct: 'r'
                        'fish': ['s', 'a', 'e'],   // correct: 's'
                        'bear': ['e', 'a', 'i'],   // correct: 'e'
                        'animals': ['i', 'a', 'e'], // correct: 'i'
                        'pets': ['e', 'a', 'i'],    // correct: 'e'
                        'sounds': ['u', 'o', 'a'],  // correct: 'u'
                        'habitats': ['i', 'a', 'e'] // correct: 'i'
                      };
                      const options = optionsMap[currentQuestion.word] || ['a', 'e', 'i'];
                      return options.map((letter) => (
                        <button
                          key={letter}
                          className={`py-2 px-3 rounded-lg active:scale-95 ${selectedAnswer === letter ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-100'}`}
                          onClick={() => setSelectedAnswer(letter)}
                        >
                          {letter}
                        </button>
                      ));
                    })()}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                className="w-full mt-4 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-bold active:scale-95"
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
              >
                提交答案
              </button>
            </>
          ) : (
            <>
              {/* Feedback */}
              <div className="flex flex-col items-center justify-center h-full">
                <div className={`text-4xl mb-4 ${
                  isCorrect ? 'text-green-500' : 'text-red-500'
                }`}>
                  {isCorrect ? <Check size={48} /> : <X size={48} />}
                </div>
                <h2 className={`text-lg font-bold mb-2 ${
                  isCorrect ? 'text-green-500' : 'text-red-500'
                }`}>
                  {isCorrect ? '回答正确！' : '回答错误'}
                </h2>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  {isCorrect ? '太棒了！' : `正确答案是: ${currentQuestion.correctAnswer}`}
                </p>
                
                {/* Buttons */}
                <div className="w-full space-y-3">
                  <button
                    className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-bold active:scale-95"
                    onClick={handleContinue}
                  >
                    继续
                  </button>
                  <button
                    className="w-full py-3 bg-blue-100 text-blue-700 rounded-lg font-medium active:scale-95 flex items-center justify-center"
                    onClick={handleShowExplanation}
                  >
                    <Info size={16} className="mr-2" />
                    答疑解惑
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Explanation Modal */}
        {showExplanation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="w-[280px] bg-white rounded-2xl p-4">
              <h3 className="text-lg font-bold mb-3">答疑解惑</h3>
              <div className="flex items-center mb-3">
                <img 
                  src={currentQuestion.image} 
                  alt={currentQuestion.word} 
                  className="w-16 h-16 object-contain mr-3"
                />
                <div>
                  <h4 className="font-bold">{currentQuestion.word}</h4>
                  <p className="text-sm text-gray-600">{currentQuestion.meaning}</p>
                </div>
              </div>
              <p className="text-sm mb-4">{currentQuestion.explanation}</p>
              <button
                className="w-full py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-bold active:scale-95"
                onClick={handleCloseExplanation}
              >
                返回
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PracticeUnit