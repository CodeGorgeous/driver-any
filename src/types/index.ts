export declare type TDriverAny = new (config?: IDriverConfig) => IDriverAnyExport;

export declare type TDriverDirection = "top" | "bottom" | "left" | "right";

export declare interface IDriverAnyExport {
    /**
     * 向外主动暴露的推动步骤下一步方法
     */
    resolveNext?: (value?: unknown) => void;
    /**
     * 向外主动暴露的结束步骤方法
     */
    rejectClose?: (value?: unknown) => void;
    /**
     * 配置步骤描述
     */
    configurationSteps: (stepsConfig: IDriverStepConfig[]) => void;
    /**
     * 启动步骤描述
     */
    start: () => void;
}

export declare interface IDriverConfig {
    /**
     * 自定义遮罩层class
     * @default
     */
    maskClass?: string;
    /**
     * 自定义遮罩层z-index
     * @default 100
     */
    maskZIndex?: number;
    /**
     * 自定义选中元素背景板class
     * @default 
     */
    selectClass?: string
    /**
     * 自定义选中元素padding
     * @default 5
     */
    selectPadding?: number
    /**
     * 是否采用默认推动状态组件
     * @default true
     */
    ifUsePushComponent?: boolean;
    /**
     * 提示推动下一步状态组件的位置
     * @default "bottom"
     */
    pushComponentPosition?: TDriverDirection
    /**
     * 关闭按钮文本, 当主动传递的值为空字符串是会不显示该按钮
     * @default "关闭"
     */
    closeButtonText?: string;
    /**
     * 下一步按钮文本, 当主动传递的值为空字符串是会不显示该按钮
     * @default "下一步"
     */
    nextButtonText?: string;
    /**
     * 上一步按钮文本, 当主动传递的值为空字符串是会不显示该按钮
     * @default "上一步"
     */
    prevButtonText?: string;
    /**
     * 完成按钮文本
     * @default "完成"
     */
    finishButtonText?: string;
    /**
     * 是否展示关闭按钮
     * @default false
     */
    ifShowCloseButton?: boolean;
    /**
     * 是否展示下一步按钮
     * @default true
     */
    ifShowNextButton?: boolean;
    /**
     * 是否展示上一步按钮
     * @default false
     */
    ifShowPrevButton?: boolean;
    /**
     * 是否开启移动动画
     * @default true
     */
    animation?: boolean;
    /**
     * 自定义pushComponent组件描述文本类名
     * @default ""
     */
    pushComponentClass?: string;
    /**
     * 点击遮罩层是否可关闭引导
     * @default true
     */
    ifClickMaskCloseStep?: boolean;
    /**
     * 引导步骤时是否允许页面滚动, 暂时只支持不允许滚动的情况
     * @default false
     */
    ifScrollPageWhenStepStart?: boolean;
    /**
     * 下一步触发回调函数
     * @default () => {}
     */
    onNextCallback?: (step: IDriverStepConfig) => void;
    /**
     * 上一步触发回调函数
     * @default () => {}
     */
    onPrevCallback?: (step: IDriverStepConfig) => void;
    /**
     * 完成所有步骤回调函数
     * @default () => {}
     */
    onFinishCallback?: () => void;
    /**
     * 关闭步骤回调函数
     * @default () => {}
     */
    onCloseCallback?: () => void;
}

export declare interface IDriverStepConfig {
    /**
     * Dom选择器
     */
    domSelector: string
    /**
     * 步骤描述文本
     */
    stepDesc?: string
    /**
     * 自定义步骤确认框选择器, 如果您在建立改类是已经选用了默认pushComponent组件则该值无效
     */
    customizedPushComponent?: string
    /**
     * 每一个单独的步骤也可以配置确认框位置, 如果没有配置则采用全局中配置的位置
     */
    pushComponentPosition?: TDriverDirection,
    /**
     * 自定义参数, 用于辅助用户自定义操作
     */
    customParameters?: object
}

export declare interface IDriverConfig {
    /**
     * 自定义遮罩层class
     * @default
     */
    maskClass?: string;
    /**
     * 自定义遮罩层z-index
     * @default 100
     */
    maskZIndex?: number;
    /**
     * 自定义选中元素背景板class
     * @default 
     */
    selectClass?: string
    /**
     * 自定义选中元素padding
     * @default 5
     */
    selectPadding?: number
    /**
     * 是否采用默认推动状态组件
     * @default true
     */
    ifUsePushComponent?: boolean;
    /**
     * 提示推动下一步状态组件的位置
     * @default "bottom"
     */
    pushComponentPosition?: TDriverDirection
    /**
     * 关闭按钮文本, 当主动传递的值为空字符串是会不显示该按钮
     * @default "关闭"
     */
    closeButtonText?: string;
    /**
     * 下一步按钮文本, 当主动传递的值为空字符串是会不显示该按钮
     * @default "下一步"
     */
    nextButtonText?: string;
    /**
     * 上一步按钮文本, 当主动传递的值为空字符串是会不显示该按钮
     * @default "上一步"
     */
    prevButtonText?: string;
    /**
     * 完成按钮文本
     * @default "完成"
     */
    finishButtonText?: string;
    /**
     * 是否展示关闭按钮
     * @default false
     */
    ifShowCloseButton?: boolean;
    /**
     * 是否展示下一步按钮
     * @default true
     */
    ifShowNextButton?: boolean;
    /**
     * 是否展示上一步按钮
     * @default false
     */
    ifShowPrevButton?: boolean;
    /**
     * 是否开始移动动画
     * @default true
     */
    animation?: boolean;
    /**
     * 自定义pushComponent组件描述文本类名
     * @default ""
     */
    pushComponentClass?: string;
    /**
     * 点击遮罩层是否可关闭引导
     * @default true
     */
    ifClickMaskCloseStep?: boolean;
    /**
     * 引导步骤时是否允许页面滚动, 暂时只支持不允许滚动的情况
     * @default false
     */
    ifScrollPageWhenStepStart?: boolean;
    /**
     * 下一步触发回调函数
     * @default () => {}
     */
    onNextCallback?: (step: IDriverStepConfig) => void;
    /**
     * 上一步触发回调函数
     * @default () => {}
     */
    onPrevCallback?: (step: IDriverStepConfig) => void;
    /**
     * 完成所有步骤回调函数
     * @default () => {}
     */
    onFinishCallback?: () => void;
    /**
     * 关闭步骤回调函数
     * @default () => {}
     */
    onCloseCallback?: () => void;
}