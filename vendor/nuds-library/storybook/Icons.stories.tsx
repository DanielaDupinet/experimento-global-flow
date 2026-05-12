import React from "react";
import { View, ScrollView } from "react-native";
import {
  // ── Actions > Common Actions (NEW) ──
  HeartIcon,
  HeartFilledIcon,
  VisibilityOnIcon,
  VisibilityOffIcon,
  RenewIcon,
  SendIcon,
  EmailIcon,
  EmailAddIcon,
  QrcodeIcon,
  StarIcon,
  ContactsIcon,
  AddIcon,
  RemoveIcon,
  CheckIcon,
  PlayCircleIcon,
  AddCircleIcon,
  RemoveCircleIcon,
  ImageIcon,
  ImageAddIcon,
  TagIcon,
  DivideIcon,
  PlayIcon,
  PlayFilledIcon,
  PauseIcon,
  SquareIcon,
  BlockIcon,
  ArrowsUpDownIcon,
  ArrowsUpDownFilledIcon,
  TriangleUpFilledIcon,
  TriangleDownFilledIcon,
  SignIcon,
  SignFilledIcon,
  EyeSparkleIcon,
  PlaceholderIcon,
  // ── Actions > Feedbacks (NEW) ──
  SentimentVeryDissatisfiedIcon,
  SentimentDissatisfiedIcon,
  SentimentNeutralIcon,
  SentimentSatisfiedIcon,
  SentimentVerySatisfiedIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  CheckCircleIcon,
  CloseCircleIcon,
  WarningCircleIcon,
  WarningIcon,
  InfoIcon,
  // ── Categories > Transactions (NEW) ──
  HouseIcon,
  ToolsIcon,
  RestaurantIcon,
  TaxiCarIcon,
  HealthIcon,
  ShoppingBagIcon,
  PingPongIcon,
  ShoppingCartIcon,
  OthersIcon,
  OthersFilledIcon,
  GamesIcon,
  WaterIcon,
  LightbulbIcon,
  WifiIcon,
  PawIcon,
  SoapBottleIcon,
  MealIcon,
  // ── Human (NEW) ──
  UserIcon,
  UserAddIcon,
  FingerprintIcon,
  LibrasIcon,
  GroupIcon,
  UsersKidAdultIcon,
  UserEmailIcon,
  UserArrowUpIcon,
  WheelchairIcon,
  // ── Logos (NEW) ──
  NuLogoIcon,
  UvLogoIcon,
  PixIcon,
  BreBIcon,
  // ── Products (NEW) ──
  PigIcon,
  LendingIcon,
  CryptoIcon,
  MoneyBoxIcon,
  NucoinIcon,
  OpenFinanceIcon,
  LifestyleIcon,
  LifestyleFilledIcon,
  ProductShoppingBagIcon,
  ProductShoppingBagFilledIcon,
  PrivateBankerFilledIcon,
  UmbrellaIcon,
  // ── System (NEW) ──
  SmartphoneIcon,
  BellIcon,
  BellFilledIcon,
  LocationIcon,
  LocationOffIcon,
  HeadsetIcon,
  MicrophoneIcon,
  MicrophoneOffIcon,
  VideoIcon,
  VideoOffIcon,
  PhoneIcon,
  PhoneDownIcon,
  SunIcon,
  MoonIcon,
  ModesIcon,
  PhoneIncomingIcon,
  PhoneOutgoingIcon,
  SmartphoneVibrationIcon,
  // ── UI Actions > Navigation (NEW) ──
  ArrowBackIcon,
  CloseIcon,
  CloseMiniIcon,
  ArrowUpRightIcon,
  ChevronIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  SearchIcon,
  MenuIcon,
  // ── UI Actions > Common Actions (NEW) ──
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ExpandMoreIcon,
  ExpandLessIcon,
  UnfoldMoreIcon,
  UnfoldLessIcon,
  DragHandleIcon,
  TuneIcon,
  SettingsIcon,
  CameraIcon,
  CopyIcon,
  DownloadIcon,
  PencilIcon,
  EraseIcon,
  TrashIcon,
  AttachmentIcon,
  ChatIcon,
  RefreshIcon,
  ShareIosIcon,
  ShareAndroidIcon,
  LinkIcon,
  HelpIcon,
  SpinnerIcon,
  UndoIcon,
  ListIcon,
  SortIcon,
  ArrowsTowardsEachOtherIcon,
  // ── Financial > Cards (NEW) ──
  CardIcon,
  CardBlockedIcon,
  VirtualCardIcon,
  CardStackIcon,
  SharedPhysicalCardIcon,
  SharedVirtualCardIcon,
  CardCollateralIcon,
  GlobalPhysicalCardIcon,
  GlobalVirtualCardIcon,
  CardShieldIcon,
  HorizontalCardIcon,
  HorizontalCardBlockedIcon,
  HorizontalVirtualCardIcon,
  HorizontalCardStackIcon,
  HorizontalCardCollateralIcon,
  ExpiringCardIcon,
  CardTransferLimitsIcon,
  HorizontalCardTransferLimitsIcon,
  CardGivenIcon,
  CardReceivedIcon,
  CardTransferIcon,
  // ── Financial > Other (NEW) ──
  RewardsIcon,
  InterestIcon,
  ReceiptIcon,
  MoneyBillIcon,
  MoneyOutIcon,
  MoneyInIcon,
  MoneyStackIcon,
  BarCodeIcon,
  AnticipateInstallmentsIcon,
  RequestMoneyIcon,
  PigInIcon,
  PigOutIcon,
  PigAutoIcon,
  PigLockedIcon,
  YieldIcon,
  PosIcon,
  RecurringPaymentsIcon,
  InternationalTransferIcon,
  InternationalTransferInIcon,
  GemIcon,
  DollarSignIcon,
  DollarSignFilledIcon,
  TicketIcon,
  LineChartIcon,
  PieChartIcon,
  CalculatorIcon,
  RefinanceIcon,
  CashbackIcon,
  BarsChartIcon,
  BarsChartFilledIcon,
  RefundIcon,
  RefundTemporaryIcon,
  MoneyAddIcon,
  AdvanceInstallmentsIcon,
  ScoreIcon,
  SmartPortfolioIcon,
  PortfolioIcon,
  CreditLetterIcon,
  BarCodeSearchIcon,
  BarCodeShareIcon,
  MoneySelfTransferIcon,
  WalletIcon,
  // ── Objects > Building (NEW) ──
  BuildingsIcon,
  StoreIcon,
  BankIcon,
  HomeTemporaryIcon,
  // ── Objects > Health (NEW) ──
  HeartsIcon,
  HeartHaloIcon,
  TestTubeIcon,
  RibbonIcon,
  FootCirclesIcon,
  EsimIcon,
  CurativeIcon,
  StethoscopeIcon,
  // ── Objects > Security (NEW) ──
  LockIcon,
  LockOpenIcon,
  ShieldCheckIcon,
  ShieldCheckFilledIcon,
  ShieldWarningIcon,
  ShieldPhoneIcon,
  ShieldIcon,
  MoneyProtectedIcon,
  MoneyShieldIcon,
  ThiefIcon,
  FlagIcon,
  SmartphoneLockIcon,
  UserInsideIcon,
  UserInsideOffIcon,
  UserOutsideIcon,
  // ── Objects > Transport (NEW) ──
  NuTagIcon,
  NuTagShipIcon,
  TruckIcon,
  CarPlateIcon,
  CarIcon,
  ParkingSignIcon,
  BusIcon,
  TollIcon,
  CarShieldIcon,
  CarSettingsIcon,
  CarCollisionIcon,
  CarsShieldIcon,
  CarGlassSparkIcon,
  // ── Objects > Time (NEW) ──
  CalendarIcon,
  CalendarScheduledIcon,
  CalendarOverdueIcon,
  CalendarEditIcon,
  CalendarRenewIcon,
  HourglassIcon,
  ClockIcon,
  Clock24hIcon,
  HistoryIcon,
  // ── Objects > Other (NEW) ──
  DocumentIcon,
  CpfIcon,
  UserIdIcon,
  SparkleIcon,
  GlobeIcon,
  GiftCardsIcon,
  FlowerIcon,
  FireIcon,
  WindIcon,
  TrophyIcon,
  SoccerBallIcon,
  SoccerBallFilledIcon,
  SnowflakeIcon,
  ArmchairIcon,
  BookIcon,
  TargetIcon,
  ShapesBoxIcon,
  ComputerPlusIcon,
  BoltIcon,
  ChangeContractIcon,
  SmartphoneBrokenIcon,
  ComputerFixIcon,
  // ── Legacy Icons ──
  AddRecipientIcon,
  AddToWalletIcon,
  AllTimeEarningsIcon,
  AppearanceIcon,
  AppleWalletIcon,
  AverageCostIcon,
  BitcoinIcon,
  Check,
  CheckFilledIcon,
  CheckmarkGreenIcon,
  CheckmarkIcon,
  CreditCardIcon,
  ExchangeIcon,
  EyeOffIcon,
  EyeOnIcon,
  FreezeIcon,
  KeyIcon,
  LogoutIcon,
  MastercardLogo,
  MGMIcon,
  MinusIcon,
  PaymentsKeysIcon,
  RadioButton,
  RealizedProfitLossIcon,
  ReceiveIcon,
  SupportIcon,
  SwapIcon,
  SwapsIcon,
  TotalInvestedIcon,
  UberLogo,
  UMAIcon,
  UnfreezeIcon,
  UnrealizedProfitLossIcon,
  USFlagIcon,
  VerifiedIcon,
  // ── Primitives ──
  NText,
} from "@nu-design-org/nuds-vibecode-react-native";

export default {
  title: "Primitives/Icons",
};

const NewBadge = () => (
  <View
    style={{
      backgroundColor: "#820AD1",
      borderRadius: 4,
      paddingHorizontal: 5,
      paddingVertical: 1,
      marginLeft: 4,
    }}
  >
    <NText
      variant="labelXSmallDefault"
      style={{ color: "#FFFFFF", fontSize: 9, fontWeight: "700" }}
    >
      NEW
    </NText>
  </View>
);

const IconRow = ({
  icon: Icon,
  name,
  isNew = false,
}: {
  icon: React.ComponentType<any>;
  name: string;
  isNew?: boolean;
}) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingVertical: 4,
    }}
  >
    <View
      style={{
        width: 32,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon />
    </View>
    <NText variant="labelSmallDefault">{name}</NText>
    {isNew && <NewBadge />}
  </View>
);

const SectionTitle = ({ title }: { title: string }) => (
  <View style={{ paddingTop: 16, paddingBottom: 8 }}>
    <NText variant="labelMediumDefault" style={{ opacity: 0.6 }}>
      {title}
    </NText>
  </View>
);

export const AllIcons = {
  render: () => (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, gap: 4 }}>

      {/* ── Actions > Common Actions ── */}
      <SectionTitle title="Actions > Common Actions" />
      <IconRow icon={HeartIcon} name="HeartIcon" isNew />
      <IconRow icon={HeartFilledIcon} name="HeartFilledIcon" isNew />
      <IconRow icon={VisibilityOnIcon} name="VisibilityOnIcon" isNew />
      <IconRow icon={VisibilityOffIcon} name="VisibilityOffIcon" isNew />
      <IconRow icon={RenewIcon} name="RenewIcon" isNew />
      <IconRow icon={SendIcon} name="SendIcon" isNew />
      <IconRow icon={EmailIcon} name="EmailIcon" isNew />
      <IconRow icon={EmailAddIcon} name="EmailAddIcon" isNew />
      <IconRow icon={QrcodeIcon} name="QrcodeIcon" isNew />
      <IconRow icon={StarIcon} name="StarIcon" isNew />
      <IconRow icon={ContactsIcon} name="ContactsIcon" isNew />
      <IconRow icon={AddIcon} name="AddIcon" isNew />
      <IconRow icon={RemoveIcon} name="RemoveIcon" isNew />
      <IconRow icon={CheckIcon} name="CheckIcon" isNew />
      <IconRow icon={PlayCircleIcon} name="PlayCircleIcon" isNew />
      <IconRow icon={AddCircleIcon} name="AddCircleIcon" isNew />
      <IconRow icon={RemoveCircleIcon} name="RemoveCircleIcon" isNew />
      <IconRow icon={ImageIcon} name="ImageIcon" isNew />
      <IconRow icon={ImageAddIcon} name="ImageAddIcon" isNew />
      <IconRow icon={TagIcon} name="TagIcon" isNew />
      <IconRow icon={DivideIcon} name="DivideIcon" isNew />
      <IconRow icon={PlayIcon} name="PlayIcon" isNew />
      <IconRow icon={PlayFilledIcon} name="PlayFilledIcon" isNew />
      <IconRow icon={PauseIcon} name="PauseIcon" isNew />
      <IconRow icon={SquareIcon} name="SquareIcon" isNew />
      <IconRow icon={BlockIcon} name="BlockIcon" isNew />
      <IconRow icon={ArrowsUpDownIcon} name="ArrowsUpDownIcon" isNew />
      <IconRow icon={ArrowsUpDownFilledIcon} name="ArrowsUpDownFilledIcon" isNew />
      <IconRow icon={TriangleUpFilledIcon} name="TriangleUpFilledIcon" isNew />
      <IconRow icon={TriangleDownFilledIcon} name="TriangleDownFilledIcon" isNew />
      <IconRow icon={SignIcon} name="SignIcon" isNew />
      <IconRow icon={SignFilledIcon} name="SignFilledIcon" isNew />
      <IconRow icon={EyeSparkleIcon} name="EyeSparkleIcon" isNew />
      <IconRow icon={PlaceholderIcon} name="PlaceholderIcon" isNew />

      {/* ── Actions > Feedbacks ── */}
      <SectionTitle title="Actions > Feedbacks" />
      <IconRow icon={SentimentVeryDissatisfiedIcon} name="SentimentVeryDissatisfiedIcon" isNew />
      <IconRow icon={SentimentDissatisfiedIcon} name="SentimentDissatisfiedIcon" isNew />
      <IconRow icon={SentimentNeutralIcon} name="SentimentNeutralIcon" isNew />
      <IconRow icon={SentimentSatisfiedIcon} name="SentimentSatisfiedIcon" isNew />
      <IconRow icon={SentimentVerySatisfiedIcon} name="SentimentVerySatisfiedIcon" isNew />
      <IconRow icon={ThumbsUpIcon} name="ThumbsUpIcon" isNew />
      <IconRow icon={ThumbsDownIcon} name="ThumbsDownIcon" isNew />
      <IconRow icon={CheckCircleIcon} name="CheckCircleIcon" isNew />
      <IconRow icon={CloseCircleIcon} name="CloseCircleIcon" isNew />
      <IconRow icon={WarningCircleIcon} name="WarningCircleIcon" isNew />
      <IconRow icon={WarningIcon} name="WarningIcon" isNew />
      <IconRow icon={InfoIcon} name="InfoIcon" isNew />

      {/* ── Categories > Transactions ── */}
      <SectionTitle title="Categories > Transactions" />
      <IconRow icon={HouseIcon} name="HouseIcon" isNew />
      <IconRow icon={ToolsIcon} name="ToolsIcon" isNew />
      <IconRow icon={RestaurantIcon} name="RestaurantIcon" isNew />
      <IconRow icon={TaxiCarIcon} name="TaxiCarIcon" isNew />
      <IconRow icon={HealthIcon} name="HealthIcon" isNew />
      <IconRow icon={ShoppingBagIcon} name="ShoppingBagIcon" isNew />
      <IconRow icon={PingPongIcon} name="PingPongIcon" isNew />
      <IconRow icon={ShoppingCartIcon} name="ShoppingCartIcon" isNew />
      <IconRow icon={OthersIcon} name="OthersIcon" isNew />
      <IconRow icon={OthersFilledIcon} name="OthersFilledIcon" isNew />
      <IconRow icon={GamesIcon} name="GamesIcon" isNew />
      <IconRow icon={WaterIcon} name="WaterIcon" isNew />
      <IconRow icon={LightbulbIcon} name="LightbulbIcon" isNew />
      <IconRow icon={WifiIcon} name="WifiIcon" isNew />
      <IconRow icon={PawIcon} name="PawIcon" isNew />
      <IconRow icon={SoapBottleIcon} name="SoapBottleIcon" isNew />
      <IconRow icon={MealIcon} name="MealIcon" isNew />

      {/* ── Human ── */}
      <SectionTitle title="Human" />
      <IconRow icon={UserIcon} name="UserIcon" isNew />
      <IconRow icon={UserAddIcon} name="UserAddIcon" isNew />
      <IconRow icon={FingerprintIcon} name="FingerprintIcon" isNew />
      <IconRow icon={LibrasIcon} name="LibrasIcon" isNew />
      <IconRow icon={GroupIcon} name="GroupIcon" isNew />
      <IconRow icon={UsersKidAdultIcon} name="UsersKidAdultIcon" isNew />
      <IconRow icon={UserEmailIcon} name="UserEmailIcon" isNew />
      <IconRow icon={UserArrowUpIcon} name="UserArrowUpIcon" isNew />
      <IconRow icon={WheelchairIcon} name="WheelchairIcon" isNew />

      {/* ── Logos ── */}
      <SectionTitle title="Logos" />
      <IconRow icon={NuLogoIcon} name="NuLogoIcon" isNew />
      <IconRow icon={UvLogoIcon} name="UvLogoIcon" isNew />
      <IconRow icon={PixIcon} name="PixIcon" isNew />
      <IconRow icon={BreBIcon} name="BreBIcon" isNew />

      {/* ── Products ── */}
      <SectionTitle title="Products" />
      <IconRow icon={PigIcon} name="PigIcon" isNew />
      <IconRow icon={LendingIcon} name="LendingIcon" isNew />
      <IconRow icon={CryptoIcon} name="CryptoIcon" isNew />
      <IconRow icon={MoneyBoxIcon} name="MoneyBoxIcon" isNew />
      <IconRow icon={NucoinIcon} name="NucoinIcon" isNew />
      <IconRow icon={OpenFinanceIcon} name="OpenFinanceIcon" isNew />
      <IconRow icon={LifestyleIcon} name="LifestyleIcon" isNew />
      <IconRow icon={LifestyleFilledIcon} name="LifestyleFilledIcon" isNew />
      <IconRow icon={ProductShoppingBagIcon} name="ProductShoppingBagIcon" isNew />
      <IconRow icon={ProductShoppingBagFilledIcon} name="ProductShoppingBagFilledIcon" isNew />
      <IconRow icon={PrivateBankerFilledIcon} name="PrivateBankerFilledIcon" isNew />
      <IconRow icon={UmbrellaIcon} name="UmbrellaIcon" isNew />

      {/* ── System ── */}
      <SectionTitle title="System" />
      <IconRow icon={SmartphoneIcon} name="SmartphoneIcon" isNew />
      <IconRow icon={BellIcon} name="BellIcon" isNew />
      <IconRow icon={BellFilledIcon} name="BellFilledIcon" isNew />
      <IconRow icon={LocationIcon} name="LocationIcon" isNew />
      <IconRow icon={LocationOffIcon} name="LocationOffIcon" isNew />
      <IconRow icon={HeadsetIcon} name="HeadsetIcon" isNew />
      <IconRow icon={MicrophoneIcon} name="MicrophoneIcon" isNew />
      <IconRow icon={MicrophoneOffIcon} name="MicrophoneOffIcon" isNew />
      <IconRow icon={VideoIcon} name="VideoIcon" isNew />
      <IconRow icon={VideoOffIcon} name="VideoOffIcon" isNew />
      <IconRow icon={PhoneIcon} name="PhoneIcon" isNew />
      <IconRow icon={PhoneDownIcon} name="PhoneDownIcon" isNew />
      <IconRow icon={SunIcon} name="SunIcon" isNew />
      <IconRow icon={MoonIcon} name="MoonIcon" isNew />
      <IconRow icon={ModesIcon} name="ModesIcon" isNew />
      <IconRow icon={PhoneIncomingIcon} name="PhoneIncomingIcon" isNew />
      <IconRow icon={PhoneOutgoingIcon} name="PhoneOutgoingIcon" isNew />
      <IconRow icon={SmartphoneVibrationIcon} name="SmartphoneVibrationIcon" isNew />

      {/* ── UI Actions > Navigation ── */}
      <SectionTitle title="UI Actions > Navigation" />
      <IconRow icon={ArrowBackIcon} name="ArrowBackIcon" isNew />
      <IconRow icon={CloseIcon} name="CloseIcon" isNew />
      <IconRow icon={CloseMiniIcon} name="CloseMiniIcon" isNew />
      <IconRow icon={ArrowUpRightIcon} name="ArrowUpRightIcon" isNew />
      <IconRow icon={ChevronIcon} name="ChevronIcon" isNew />
      <IconRow icon={MoreHorizontalIcon} name="MoreHorizontalIcon" isNew />
      <IconRow icon={MoreVerticalIcon} name="MoreVerticalIcon" isNew />
      <IconRow icon={SearchIcon} name="SearchIcon" isNew />
      <IconRow icon={MenuIcon} name="MenuIcon" isNew />

      {/* ── UI Actions > Common Actions ── */}
      <SectionTitle title="UI Actions > Common Actions" />
      <IconRow icon={ArrowRightIcon} name="ArrowRightIcon" isNew />
      <IconRow icon={ArrowUpIcon} name="ArrowUpIcon" isNew />
      <IconRow icon={ArrowDownIcon} name="ArrowDownIcon" isNew />
      <IconRow icon={ArrowLeftIcon} name="ArrowLeftIcon" isNew />
      <IconRow icon={ExpandMoreIcon} name="ExpandMoreIcon" isNew />
      <IconRow icon={ExpandLessIcon} name="ExpandLessIcon" isNew />
      <IconRow icon={UnfoldMoreIcon} name="UnfoldMoreIcon" isNew />
      <IconRow icon={UnfoldLessIcon} name="UnfoldLessIcon" isNew />
      <IconRow icon={DragHandleIcon} name="DragHandleIcon" isNew />
      <IconRow icon={TuneIcon} name="TuneIcon" isNew />
      <IconRow icon={SettingsIcon} name="SettingsIcon" isNew />
      <IconRow icon={CameraIcon} name="CameraIcon" isNew />
      <IconRow icon={CopyIcon} name="CopyIcon" isNew />
      <IconRow icon={DownloadIcon} name="DownloadIcon" isNew />
      <IconRow icon={PencilIcon} name="PencilIcon" isNew />
      <IconRow icon={EraseIcon} name="EraseIcon" isNew />
      <IconRow icon={TrashIcon} name="TrashIcon" isNew />
      <IconRow icon={AttachmentIcon} name="AttachmentIcon" isNew />
      <IconRow icon={ChatIcon} name="ChatIcon" isNew />
      <IconRow icon={RefreshIcon} name="RefreshIcon" isNew />
      <IconRow icon={ShareIosIcon} name="ShareIosIcon" isNew />
      <IconRow icon={ShareAndroidIcon} name="ShareAndroidIcon" isNew />
      <IconRow icon={LinkIcon} name="LinkIcon" isNew />
      <IconRow icon={HelpIcon} name="HelpIcon" isNew />
      <IconRow icon={SpinnerIcon} name="SpinnerIcon" isNew />
      <IconRow icon={UndoIcon} name="UndoIcon" isNew />
      <IconRow icon={ListIcon} name="ListIcon" isNew />
      <IconRow icon={SortIcon} name="SortIcon" isNew />
      <IconRow icon={ArrowsTowardsEachOtherIcon} name="ArrowsTowardsEachOtherIcon" isNew />

      {/* ── Financial > Cards ── */}
      <SectionTitle title="Financial > Cards" />
      <IconRow icon={CardIcon} name="CardIcon" isNew />
      <IconRow icon={CardBlockedIcon} name="CardBlockedIcon" isNew />
      <IconRow icon={VirtualCardIcon} name="VirtualCardIcon" isNew />
      <IconRow icon={CardStackIcon} name="CardStackIcon" isNew />
      <IconRow icon={SharedPhysicalCardIcon} name="SharedPhysicalCardIcon" isNew />
      <IconRow icon={SharedVirtualCardIcon} name="SharedVirtualCardIcon" isNew />
      <IconRow icon={CardCollateralIcon} name="CardCollateralIcon" isNew />
      <IconRow icon={GlobalPhysicalCardIcon} name="GlobalPhysicalCardIcon" isNew />
      <IconRow icon={GlobalVirtualCardIcon} name="GlobalVirtualCardIcon" isNew />
      <IconRow icon={CardShieldIcon} name="CardShieldIcon" isNew />
      <IconRow icon={HorizontalCardIcon} name="HorizontalCardIcon" isNew />
      <IconRow icon={HorizontalCardBlockedIcon} name="HorizontalCardBlockedIcon" isNew />
      <IconRow icon={HorizontalVirtualCardIcon} name="HorizontalVirtualCardIcon" isNew />
      <IconRow icon={HorizontalCardStackIcon} name="HorizontalCardStackIcon" isNew />
      <IconRow icon={HorizontalCardCollateralIcon} name="HorizontalCardCollateralIcon" isNew />
      <IconRow icon={ExpiringCardIcon} name="ExpiringCardIcon" isNew />
      <IconRow icon={CardTransferLimitsIcon} name="CardTransferLimitsIcon" isNew />
      <IconRow icon={HorizontalCardTransferLimitsIcon} name="HorizontalCardTransferLimitsIcon" isNew />
      <IconRow icon={CardGivenIcon} name="CardGivenIcon" isNew />
      <IconRow icon={CardReceivedIcon} name="CardReceivedIcon" isNew />
      <IconRow icon={CardTransferIcon} name="CardTransferIcon" isNew />

      {/* ── Financial > Other ── */}
      <SectionTitle title="Financial > Other" />
      <IconRow icon={RewardsIcon} name="RewardsIcon" isNew />
      <IconRow icon={InterestIcon} name="InterestIcon" isNew />
      <IconRow icon={ReceiptIcon} name="ReceiptIcon" isNew />
      <IconRow icon={MoneyBillIcon} name="MoneyBillIcon" isNew />
      <IconRow icon={MoneyOutIcon} name="MoneyOutIcon" isNew />
      <IconRow icon={MoneyInIcon} name="MoneyInIcon" isNew />
      <IconRow icon={MoneyStackIcon} name="MoneyStackIcon" isNew />
      <IconRow icon={BarCodeIcon} name="BarCodeIcon" isNew />
      <IconRow icon={AnticipateInstallmentsIcon} name="AnticipateInstallmentsIcon" isNew />
      <IconRow icon={RequestMoneyIcon} name="RequestMoneyIcon" isNew />
      <IconRow icon={PigInIcon} name="PigInIcon" isNew />
      <IconRow icon={PigOutIcon} name="PigOutIcon" isNew />
      <IconRow icon={PigAutoIcon} name="PigAutoIcon" isNew />
      <IconRow icon={PigLockedIcon} name="PigLockedIcon" isNew />
      <IconRow icon={YieldIcon} name="YieldIcon" isNew />
      <IconRow icon={PosIcon} name="PosIcon" isNew />
      <IconRow icon={RecurringPaymentsIcon} name="RecurringPaymentsIcon" isNew />
      <IconRow icon={InternationalTransferIcon} name="InternationalTransferIcon" isNew />
      <IconRow icon={InternationalTransferInIcon} name="InternationalTransferInIcon" isNew />
      <IconRow icon={GemIcon} name="GemIcon" isNew />
      <IconRow icon={DollarSignIcon} name="DollarSignIcon" isNew />
      <IconRow icon={DollarSignFilledIcon} name="DollarSignFilledIcon" isNew />
      <IconRow icon={TicketIcon} name="TicketIcon" isNew />
      <IconRow icon={LineChartIcon} name="LineChartIcon" isNew />
      <IconRow icon={PieChartIcon} name="PieChartIcon" isNew />
      <IconRow icon={CalculatorIcon} name="CalculatorIcon" isNew />
      <IconRow icon={RefinanceIcon} name="RefinanceIcon" isNew />
      <IconRow icon={CashbackIcon} name="CashbackIcon" isNew />
      <IconRow icon={BarsChartIcon} name="BarsChartIcon" isNew />
      <IconRow icon={BarsChartFilledIcon} name="BarsChartFilledIcon" isNew />
      <IconRow icon={RefundIcon} name="RefundIcon" isNew />
      <IconRow icon={RefundTemporaryIcon} name="RefundTemporaryIcon" isNew />
      <IconRow icon={MoneyAddIcon} name="MoneyAddIcon" isNew />
      <IconRow icon={AdvanceInstallmentsIcon} name="AdvanceInstallmentsIcon" isNew />
      <IconRow icon={ScoreIcon} name="ScoreIcon" isNew />
      <IconRow icon={SmartPortfolioIcon} name="SmartPortfolioIcon" isNew />
      <IconRow icon={PortfolioIcon} name="PortfolioIcon" isNew />
      <IconRow icon={CreditLetterIcon} name="CreditLetterIcon" isNew />
      <IconRow icon={BarCodeSearchIcon} name="BarCodeSearchIcon" isNew />
      <IconRow icon={BarCodeShareIcon} name="BarCodeShareIcon" isNew />
      <IconRow icon={MoneySelfTransferIcon} name="MoneySelfTransferIcon" isNew />
      <IconRow icon={WalletIcon} name="WalletIcon" isNew />

      {/* ── Objects > Building ── */}
      <SectionTitle title="Objects > Building" />
      <IconRow icon={BuildingsIcon} name="BuildingsIcon" isNew />
      <IconRow icon={StoreIcon} name="StoreIcon" isNew />
      <IconRow icon={BankIcon} name="BankIcon" isNew />
      <IconRow icon={HomeTemporaryIcon} name="HomeTemporaryIcon" isNew />

      {/* ── Objects > Health ── */}
      <SectionTitle title="Objects > Health" />
      <IconRow icon={HeartsIcon} name="HeartsIcon" isNew />
      <IconRow icon={HeartHaloIcon} name="HeartHaloIcon" isNew />
      <IconRow icon={TestTubeIcon} name="TestTubeIcon" isNew />
      <IconRow icon={RibbonIcon} name="RibbonIcon" isNew />
      <IconRow icon={FootCirclesIcon} name="FootCirclesIcon" isNew />
      <IconRow icon={EsimIcon} name="EsimIcon" isNew />
      <IconRow icon={CurativeIcon} name="CurativeIcon" isNew />
      <IconRow icon={StethoscopeIcon} name="StethoscopeIcon" isNew />

      {/* ── Objects > Security ── */}
      <SectionTitle title="Objects > Security" />
      <IconRow icon={LockIcon} name="LockIcon" isNew />
      <IconRow icon={LockOpenIcon} name="LockOpenIcon" isNew />
      <IconRow icon={ShieldCheckIcon} name="ShieldCheckIcon" isNew />
      <IconRow icon={ShieldCheckFilledIcon} name="ShieldCheckFilledIcon" isNew />
      <IconRow icon={ShieldWarningIcon} name="ShieldWarningIcon" isNew />
      <IconRow icon={ShieldPhoneIcon} name="ShieldPhoneIcon" isNew />
      <IconRow icon={ShieldIcon} name="ShieldIcon" isNew />
      <IconRow icon={MoneyProtectedIcon} name="MoneyProtectedIcon" isNew />
      <IconRow icon={MoneyShieldIcon} name="MoneyShieldIcon" isNew />
      <IconRow icon={ThiefIcon} name="ThiefIcon" isNew />
      <IconRow icon={FlagIcon} name="FlagIcon" isNew />
      <IconRow icon={SmartphoneLockIcon} name="SmartphoneLockIcon" isNew />
      <IconRow icon={UserInsideIcon} name="UserInsideIcon" isNew />
      <IconRow icon={UserInsideOffIcon} name="UserInsideOffIcon" isNew />
      <IconRow icon={UserOutsideIcon} name="UserOutsideIcon" isNew />

      {/* ── Objects > Transport ── */}
      <SectionTitle title="Objects > Transport" />
      <IconRow icon={NuTagIcon} name="NuTagIcon" isNew />
      <IconRow icon={NuTagShipIcon} name="NuTagShipIcon" isNew />
      <IconRow icon={TruckIcon} name="TruckIcon" isNew />
      <IconRow icon={CarPlateIcon} name="CarPlateIcon" isNew />
      <IconRow icon={CarIcon} name="CarIcon" isNew />
      <IconRow icon={ParkingSignIcon} name="ParkingSignIcon" isNew />
      <IconRow icon={BusIcon} name="BusIcon" isNew />
      <IconRow icon={TollIcon} name="TollIcon" isNew />
      <IconRow icon={CarShieldIcon} name="CarShieldIcon" isNew />
      <IconRow icon={CarSettingsIcon} name="CarSettingsIcon" isNew />
      <IconRow icon={CarCollisionIcon} name="CarCollisionIcon" isNew />
      <IconRow icon={CarsShieldIcon} name="CarsShieldIcon" isNew />
      <IconRow icon={CarGlassSparkIcon} name="CarGlassSparkIcon" isNew />

      {/* ── Objects > Time ── */}
      <SectionTitle title="Objects > Time" />
      <IconRow icon={CalendarIcon} name="CalendarIcon" isNew />
      <IconRow icon={CalendarScheduledIcon} name="CalendarScheduledIcon" isNew />
      <IconRow icon={CalendarOverdueIcon} name="CalendarOverdueIcon" isNew />
      <IconRow icon={CalendarEditIcon} name="CalendarEditIcon" isNew />
      <IconRow icon={CalendarRenewIcon} name="CalendarRenewIcon" isNew />
      <IconRow icon={HourglassIcon} name="HourglassIcon" isNew />
      <IconRow icon={ClockIcon} name="ClockIcon" isNew />
      <IconRow icon={Clock24hIcon} name="Clock24hIcon" isNew />
      <IconRow icon={HistoryIcon} name="HistoryIcon" isNew />

      {/* ── Objects > Other ── */}
      <SectionTitle title="Objects > Other" />
      <IconRow icon={DocumentIcon} name="DocumentIcon" isNew />
      <IconRow icon={CpfIcon} name="CpfIcon" isNew />
      <IconRow icon={UserIdIcon} name="UserIdIcon" isNew />
      <IconRow icon={SparkleIcon} name="SparkleIcon" isNew />
      <IconRow icon={GlobeIcon} name="GlobeIcon" isNew />
      <IconRow icon={GiftCardsIcon} name="GiftCardsIcon" isNew />
      <IconRow icon={FlowerIcon} name="FlowerIcon" isNew />
      <IconRow icon={FireIcon} name="FireIcon" isNew />
      <IconRow icon={WindIcon} name="WindIcon" isNew />
      <IconRow icon={TrophyIcon} name="TrophyIcon" isNew />
      <IconRow icon={SoccerBallIcon} name="SoccerBallIcon" isNew />
      <IconRow icon={SoccerBallFilledIcon} name="SoccerBallFilledIcon" isNew />
      <IconRow icon={SnowflakeIcon} name="SnowflakeIcon" isNew />
      <IconRow icon={ArmchairIcon} name="ArmchairIcon" isNew />
      <IconRow icon={BookIcon} name="BookIcon" isNew />
      <IconRow icon={TargetIcon} name="TargetIcon" isNew />
      <IconRow icon={ShapesBoxIcon} name="ShapesBoxIcon" isNew />
      <IconRow icon={ComputerPlusIcon} name="ComputerPlusIcon" isNew />
      <IconRow icon={BoltIcon} name="BoltIcon" isNew />
      <IconRow icon={ChangeContractIcon} name="ChangeContractIcon" isNew />
      <IconRow icon={SmartphoneBrokenIcon} name="SmartphoneBrokenIcon" isNew />
      <IconRow icon={ComputerFixIcon} name="ComputerFixIcon" isNew />

      {/* ── Legacy Icons (Prometheus-MVP) ── */}
      <SectionTitle title="Legacy Icons (Prometheus-MVP)" />
      <IconRow icon={AddRecipientIcon} name="AddRecipientIcon" />
      <IconRow icon={AddToWalletIcon} name="AddToWalletIcon" />
      <IconRow icon={AllTimeEarningsIcon} name="AllTimeEarningsIcon" />
      <IconRow icon={AppearanceIcon} name="AppearanceIcon" />
      <IconRow icon={AppleWalletIcon} name="AppleWalletIcon" />
      <IconRow icon={AverageCostIcon} name="AverageCostIcon" />
      <IconRow icon={BitcoinIcon} name="BitcoinIcon" />
      <IconRow icon={Check} name="Check" />
      <IconRow icon={CheckFilledIcon} name="CheckFilledIcon" />
      <IconRow icon={CheckmarkGreenIcon} name="CheckmarkGreenIcon" />
      <IconRow icon={CheckmarkIcon} name="CheckmarkIcon" />
      <IconRow icon={CreditCardIcon} name="CreditCardIcon" />
      <IconRow icon={ExchangeIcon} name="ExchangeIcon" />
      <IconRow icon={EyeOffIcon} name="EyeOffIcon" />
      <IconRow icon={EyeOnIcon} name="EyeOnIcon" />
      <IconRow icon={FreezeIcon} name="FreezeIcon" />
      <IconRow icon={KeyIcon} name="KeyIcon" />
      <IconRow icon={LogoutIcon} name="LogoutIcon" />
      <IconRow icon={MastercardLogo} name="MastercardLogo" />
      <IconRow icon={MGMIcon} name="MGMIcon" />
      <IconRow icon={MinusIcon} name="MinusIcon" />
      <IconRow icon={PaymentsKeysIcon} name="PaymentsKeysIcon" />
      <IconRow icon={RadioButton} name="RadioButton" />
      <IconRow icon={RealizedProfitLossIcon} name="RealizedProfitLossIcon" />
      <IconRow icon={ReceiveIcon} name="ReceiveIcon" />
      <IconRow icon={SupportIcon} name="SupportIcon" />
      <IconRow icon={SwapIcon} name="SwapIcon" />
      <IconRow icon={SwapsIcon} name="SwapsIcon" />
      <IconRow icon={TotalInvestedIcon} name="TotalInvestedIcon" />
      <IconRow icon={UberLogo} name="UberLogo" />
      <IconRow icon={UMAIcon} name="UMAIcon" />
      <IconRow icon={UnfreezeIcon} name="UnfreezeIcon" />
      <IconRow icon={UnrealizedProfitLossIcon} name="UnrealizedProfitLossIcon" />
      <IconRow icon={USFlagIcon} name="USFlagIcon" />
      <IconRow icon={VerifiedIcon} name="VerifiedIcon" />
    </ScrollView>
  ),
};

export const SizingAndColor = {
  render: () => (
    <View style={{ padding: 16, gap: 16 }}>
      <NText variant="labelMediumDefault">Size Variants</NText>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <BellIcon size={16} />
        <BellIcon size={20} />
        <BellIcon size={24} />
        <BellIcon size={32} />
      </View>

      <NText variant="labelMediumDefault">Color Variants</NText>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <SearchIcon color="#820AD1" />
        <SearchIcon color="#D72923" />
        <SearchIcon color="#4AA46E" />
        <SearchIcon color="#1F6BEB" />
      </View>

      <NText variant="labelMediumDefault">Multiple Icons at Different Sizes</NText>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <ArrowBackIcon size={16} />
        <AddIcon size={20} />
        <SendIcon size={24} />
        <ShieldIcon size={32} />
        <WalletIcon size={40} />
      </View>
    </View>
  ),
};
