import type { Nullable } from 'extended-utility-types';
import type {
	Actor,
	Assignable,
	Assignee,
	Closable,
	Closer,
	Commit,
	Deployment,
	DeploymentStatus,
	Issue,
	IssueOrPullRequest,
	Label,
	Labelable,
	Lockable,
	LockReason,
	MetaField,
	MilestoneItem,
	Node,
	PullRequest,
	PullRequestCommit,
	PullRequestReview,
	PullRequestReviewState,
	Ref,
	ReferencedSubject,
	RenamedTitleSubject,
	Repository,
	RequestedReviewer,
	Subscribable,
	UniformResourceLocatable,
	User,
	UserBlockDuration
} from '../';

export interface Event {
	/**
	 * Identifies the actor who performed the event.
	 */
	actor?: Nullable<Actor>;

	/**
	 * Identifies the date and time when the object was created.
	 */
	createdAt: string;
}

/**
 * Represents a `added_to_project` event on a given issue or pull request.
 */
export interface AddedToProjectEvent extends Event, Node, MetaField<'AddedToProjectEvent'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;
}

/**
 * Represents an `assigned` event on any assignable object.
 */
export interface AssignedEvent extends Event, Node, MetaField<'AssignedEvent'> {
	/**
	 * Identifies the assignable associated with the event.
	 */
	assignable: Assignable;

	/**
	 * Identifies the user or mannequin that was assigned.
	 */
	assignee?: Nullable<Assignee>;
}

/**
 * Represents a `auto_merge_disabled` event on a given pull request.
 */
export interface AutoMergeDisabledEvent extends Event, Node, MetaField<'AutoMergeDisabledEvent'> {
	/**
	 * The user who disabled auto-merge for this Pull Request.
	 */
	disabler?: Nullable<User>;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest?: Nullable<PullRequest>;

	/**
	 * The reason auto-merge was disabled.
	 */
	reason?: Nullable<string>;

	/**
	 * The reason_code relating to why auto-merge was disabled.
	 */
	reasonCode?: Nullable<string>;
}

/**
 * Represents a `auto_merge_enabled` event on a given pull request.
 */
export interface AutoMergeEnabledEvent extends Event, Node, MetaField<'AutoMergeEnabledEvent'> {
	/**
	 * The user who enabled auto-merge for this Pull Request.
	 */
	enabler?: Nullable<User>;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest?: Nullable<PullRequest>;
}

/**
 * Represents a `auto_rebase_enabled` event on a given pull request.
 */
export interface AutoRebaseEnabledEvent extends Event, Node, MetaField<'AutoRebaseEnabledEvent'> {
	/**
	 * The user who enabled auto-merge (rebase) for this Pull Request.
	 */
	enabler?: Nullable<User>;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest?: Nullable<PullRequest>;
}

/**
 * Represents a `auto_squash_enabled` event on a given pull request.
 */
export interface AutoSquashEnabledEvent extends Event, Node, MetaField<'AutoSquashEnabledEvent'> {
	/**
	 * The user who enabled auto-merge (squash) for this Pull Request.
	 */
	enabler?: Nullable<User>;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest?: Nullable<PullRequest>;
}

/**
 * Represents a `automatic_base_change_failed` event on a given pull request.
 */
export interface AutomaticBaseChangeFailedEvent extends Event, Node, MetaField<'AutomaticBaseChangeFailedEvent'> {
	/**
	 * The new base for this PR.
	 */
	newBase: string;

	/**
	 * The old base for this PR.
	 */
	oldBase: string;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `automatic_base_change_succeeded` event on a given pull request.
 */
export interface AutomaticBaseChangeSucceededEvent extends Event, Node, MetaField<'AutomaticBaseChangeSucceededEvent'> {
	/**
	 * The new base for this PR.
	 */
	newBase: string;

	/**
	 * The old base for this PR.
	 */
	oldBase: string;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `base_ref_changed` event on a given issue or pull request.
 */
export interface BaseRefChangedEvent extends Event, Node, MetaField<'BaseRefChangedEvent'> {
	/**
	 * Identifies the name of the base ref for the pull request after it was changed.
	 */
	currentRefName: string;

	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * Identifies the name of the base ref for the pull request before it was changed.
	 */
	previousRefName: string;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `base_ref_deleted` event on a given pull request.
 */
export interface BaseRefDeletedEvent extends Event, Node, MetaField<'BaseRefDeletedEvent'> {
	/**
	 * Identifies the name of the Ref associated with the `base_ref_deleted` event.
	 */
	baseRefName?: Nullable<string>;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest?: Nullable<PullRequest>;
}

/**
 * Represents a `base_ref_force_pushed` event on a given pull request.
 */
export interface BaseRefForcePushedEvent extends Event, Node, MetaField<'BaseRefForcePushedEvent'> {
	/**
	 * Identifies the after commit SHA for the 'base_ref_force_pushed' event.
	 */
	afterCommit?: Nullable<Commit>;

	/**
	 * Identifies the before commit SHA for the 'base_ref_force_pushed' event.
	 */
	beforeCommit?: Nullable<Commit>;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;

	/**
	 * Identifies the fully qualified ref name for the 'base_ref_force_pushed' event.
	 */
	ref?: Nullable<Ref>;
}

/**
 * Represents a `closed` event on any `Closable`
 */
export interface ClosedEvent extends Event, Node, UniformResourceLocatable, MetaField<'ClosedEvent'> {
	/**
	 * Object that was closed.
	 */
	closable: Closable;

	/**
	 * Object which triggered the creation of this event.
	 */
	closer?: Nullable<Closer>;
}

/**
 * Represents a `comment_deleted` event on a given issue or pull request.
 */
export interface CommentDeletedEvent extends Event, Node, MetaField<'CommentDeletedEvent'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The user who authored the deleted comment.
	 */
	deletedCommentAuthor?: Nullable<Actor>;
}

/**
 * Represents a `connected` event on a given issue or pull request.
 */
export interface ConnectedEvent extends Event, Node, MetaField<'ConnectedEvent'> {
	/**
	 * Reference originated in a different repository.
	 */
	isCrossRepository: boolean;

	/**
	 * Issue or pull request that made the reference.
	 */
	source: ReferencedSubject;

	/**
	 * Issue or pull request which was connected.
	 */
	subject: ReferencedSubject;
}

/**
 * Represents a `convert_to_draft` event on a given pull request.
 */
export interface ConvertToDraftEvent extends Event, Node, UniformResourceLocatable, MetaField<'ConvertToDraftEvent'> {
	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `converted_note_to_issue` event on a given issue or pull request.
 */
export interface ConvertedNoteToIssueEvent extends Event, Node, MetaField<'ConvertedNoteToIssueEvent'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;
}

/**
 * Represents a mention made by one issue or pull request to another.
 */
export interface CrossReferencedEvent extends Event, Node, UniformResourceLocatable, MetaField<'CrossReferencedEvent'> {
	/**
	 * Reference originated in a different repository.
	 */
	isCrossRepository: boolean;

	/**
	 * Identifies when the reference was made.
	 */
	referencedAt: string;

	/**
	 * Issue or pull request that made the reference.
	 */
	source: ReferencedSubject;

	/**
	 * Issue or pull request to which the reference was made.
	 */
	target: ReferencedSubject;

	/**
	 * Checks if the target will be closed when the source is merged.
	 */
	willCloseTarget: boolean;
}

/**
 * Represents a `demilestoned` event on a given issue or pull request.
 */
export interface DemilestonedEvent extends Event, Node, MetaField<'DemilestonedEvent'> {
	/**
	 * Identifies the milestone title associated with the 'demilestoned' event.
	 */
	milestoneTitle: string;

	/**
	 * Object referenced by event.
	 */
	subject: MilestoneItem;
}

/**
 * Represents a `deployed` event on a given pull request.
 */
export interface DeployedEvent extends Event, Node, MetaField<'DeployedEvent'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * The deployment associated with the 'deployed' event.
	 */
	deployment: Deployment;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;

	/**
	 * The ref associated with the 'deployed' event.
	 */
	ref?: Nullable<Ref>;
}

/**
 * Represents a `deployment_environment_changed` event on a given pull request.
 */
export interface DeploymentEnvironmentChangedEvent extends Event, Node, MetaField<'DeploymentEnvironmentChangedEvent'> {
	/**
	 * The deployment status that updated the deployment environment.
	 */
	deploymentStatus: DeploymentStatus;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `disconnected` event on a given issue or pull request.
 */
export interface DisconnectedEvent extends Event, Node, MetaField<'DisconnectedEvent'> {
	/**
	 * Reference originated in a different repository.
	 */
	isCrossRepository: boolean;

	/**
	 * Issue or pull request from which the issue was disconnected.
	 */
	source: ReferencedSubject;

	/**
	 * Issue or pull request which was disconnected.
	 */
	subject: ReferencedSubject;
}

/**
 * Represents a `head_ref_deleted` event on a given pull request.
 */
export interface HeadRefDeletedEvent extends Event, Node, MetaField<'HeadRefDeletedEvent'> {
	/**
	 * Identifies the Ref associated with the `head_ref_deleted` event.
	 */
	headRef?: Nullable<Ref>;

	/**
	 * Identifies the name of the Ref associated with the `head_ref_deleted` event.
	 */
	headRefName: string;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `head_ref_force_pushed` event on a given pull request.
 */
export interface HeadRefForcePushedEvent extends Event, Node, MetaField<'HeadRefForcePushedEvent'> {
	/**
	 * Identifies the after commit SHA for the 'head_ref_force_pushed' event.
	 */
	afterCommit?: Nullable<Commit>;

	/**
	 * Identifies the before commit SHA for the 'head_ref_force_pushed' event.
	 */
	beforeCommit?: Nullable<Commit>;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;

	/**
	 * Identifies the fully qualified ref name for the 'head_ref_force_pushed' event.
	 */
	ref?: Nullable<Ref>;
}

/**
 * Represents a `head_ref_restored` event on a given pull request.
 */
export interface HeadRefRestoredEvent extends Event, Node, MetaField<'HeadRefRestoredEvent'> {
	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `labeled` event on a given issue or pull request.
 */
export interface LabeledEvent extends Event, Node, MetaField<'LabeledEvent'> {
	/**
	 * Identifies the label associated with the 'labeled' event.
	 */
	label: Label;

	/**
	 * Identifies the `Labelable` associated with the event.
	 */
	labelable: Labelable;
}

/**
 * Represents a `locked` event on a given issue or pull request.
 */
export interface LockedEvent extends Event, Node, MetaField<'LockedEvent'> {
	/**
	 * Reason that the conversation was locked (optional).
	 */
	lockReason?: Nullable<LockReason>;

	/**
	 * Object that was locked.
	 */
	lockable: Lockable;
}

/**
 * Represents a `marked_as_duplicate` event on a given issue or pull request.
 */
export interface MarkedAsDuplicateEvent extends Event, Node, MetaField<'MarkedAsDuplicateEvent'> {
	/**
	 * The authoritative issue or pull request which has been duplicated by another.
	 */
	canonical?: Nullable<IssueOrPullRequest>;

	/**
	 * The issue or pull request which has been marked as a duplicate of another.
	 */
	duplicate?: Nullable<IssueOrPullRequest>;

	/**
	 * Canonical and duplicate belong to different repositories.
	 */
	isCrossRepository: boolean;
}

/**
 * Represents a `mentioned` event on a given issue or pull request.
 */
export interface MentionedEvent extends Event, Node, MetaField<'MentionedEvent'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;
}

/**
 * Represents a `merged` event on a given pull request.
 */
export interface MergedEvent extends Event, Node, UniformResourceLocatable, MetaField<'MergedEvent'> {
	/**
	 * Identifies the commit associated with the `merge` event.
	 */
	commit?: Nullable<Commit>;

	/**
	 * Identifies the Ref associated with the `merge` event.
	 */
	mergeRef?: Nullable<Ref>;

	/**
	 * Identifies the name of the Ref associated with the `merge` event.
	 */
	mergeRefName: string;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `milestoned` event on a given issue or pull request.
 */
export interface MilestonedEvent extends Event, Node, MetaField<'MilestonedEvent'> {
	/**
	 * Identifies the milestone title associated with the 'milestoned' event.
	 */
	milestoneTitle: string;

	/**
	 * Object referenced by event.
	 */
	subject: MilestoneItem;
}

/**
 * Represents a `moved_columns_in_project` event on a given issue or pull request.
 */
export interface MovedColumnsInProjectEvent extends Event, Node, MetaField<'MovedColumnsInProjectEvent'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;
}

/**
 * Represents a `pinned` event on a given issue or pull request.
 */
export interface PinnedEvent extends Event, Node, MetaField<'PinnedEvent'> {
	/**
	 * Identifies the issue associated with the event.
	 */
	issue: Issue;
}

/**
 * Represents a `ready_for_review` event on a given pull request.
 */
export interface ReadyForReviewEvent extends Event, Node, UniformResourceLocatable, MetaField<'ReadyForReviewEvent'> {
	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;
}

/**
 * Represents a `referenced` event on a given `ReferencedSubject`
 */
export interface ReferencedEvent extends Event, Node, MetaField<'ReferencedEvent'> {
	/**
	 * Identifies the commit associated with the 'referenced' event.
	 */
	commit?: Nullable<Commit>;

	/**
	 * Identifies the repository associated with the 'referenced' event.
	 */
	commitRepository: Repository;

	/**
	 * Reference originated in a different repository.
	 */
	isCrossRepository: boolean;

	/**
	 * Checks if the commit message itself references the subject. Can be false in the case of a
	 * commit comment reference.
	 */
	isDirectReference: boolean;

	/**
	 * Object referenced by event.
	 */
	subject: ReferencedSubject;
}

/**
 * Represents a `removed_from_project` event on a given issue or pull request.
 */
export interface RemovedFromProjectEvent extends Event, Node, MetaField<'RemovedFromProjectEvent'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;
}

/**
 * Represents a `renamed` event on a given issue or pull request.
 */
export interface RenamedTitleEvent extends Event, Node, MetaField<'RenamedTitleEvent'> {
	/**
	 * Identifies the current title of the issue or pull request.
	 */
	currentTitle: string;

	/**
	 * Identifies the previous title of the issue or pull request.
	 */
	previousTitle: string;

	/**
	 * Subject that was renamed.
	 */
	subject: RenamedTitleSubject;
}

/**
 * Represents a `reopened` event on any `Closable`
 */
export interface ReopenedEvent extends Event, Node, MetaField<'ReopenedEvent'> {
	/**
	 * Object that was reopened.
	 */
	closable: Closable;
}

/**
 * Represents a `review_dismissed` event on a given issue or pull request.
 */
export interface ReviewDismissedEvent extends Event, Node, UniformResourceLocatable, MetaField<'ReviewDismissedEvent'> {
	/**
	 * Identifies the primary key from the database.
	 */
	databaseId?: Nullable<number>;

	/**
	 * Identifies the optional message associated with the `review_dismissed` event.
	 */
	dismissalMessage?: Nullable<string>;

	/**
	 * Identifies the optional message associated with the event, rendered to HTML.
	 */
	dismissalMessageHTML?: Nullable<string>;

	/**
	 * Identifies the previous state of the review with the `review_dismissed` event.
	 */
	previousReviewState: PullRequestReviewState;

	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;

	/**
	 * Identifies the commit which caused the review to become stale.
	 */
	pullRequestCommit?: Nullable<PullRequestCommit>;

	/**
	 * Identifies the review associated with the `review_dismissed` event.
	 */
	review?: Nullable<PullRequestReview>;
}

/**
 * Represents an `review_request_removed` event on a given pull request.
 */
export interface ReviewRequestRemovedEvent extends Event, Node, MetaField<'ReviewRequestRemovedEvent'> {
	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;

	/**
	 * Identifies the reviewer whose review request was removed.
	 */
	requestedReviewer?: Nullable<RequestedReviewer>;
}

/**
 * Represents an `review_requested` event on a given pull request.
 */
export interface ReviewRequestedEvent extends Event, Node, MetaField<'ReviewRequestedEvent'> {
	/**
	 * PullRequest referenced by event.
	 */
	pullRequest: PullRequest;

	/**
	 * Identifies the reviewer whose review was requested.
	 */
	requestedReviewer?: Nullable<RequestedReviewer>;
}

/**
 * Represents a `subscribed` event on a given `Subscribable`
 */
export interface SubscribedEvent extends Event, Node, MetaField<'SubscribedEvent'> {
	/**
	 * Object referenced by event.
	 */
	subscribable: Subscribable;
}

/**
 * Represents a `transferred` event on a given issue or pull request.
 */
export interface TransferredEvent extends Event, Node, MetaField<'TransferredEvent'> {
	/**
	 * The repository this came from.
	 */
	fromRepository?: Nullable<Repository>;

	/**
	 * Identifies the issue associated with the event.
	 */
	issue: Issue;
}

/**
 * Represents an `unassigned` event on any assignable object.
 */
export interface UnassignedEvent extends Event, Node, MetaField<'UnassignedEvent'> {
	/**
	 * Identifies the assignable associated with the event.
	 */
	assignable: Assignable;

	/**
	 * Identifies the user or mannequin that was unassigned.
	 */
	assignee?: Nullable<Assignee>;
}

/**
 * Represents an `unlabeled` event on a given issue or pull request.
 */
export interface UnlabeledEvent extends Event, Node, MetaField<'UnlabeledEvent'> {
	/**
	 * Identifies the label associated with the 'unlabeled' event.
	 */
	label: Label;

	/**
	 * Identifies the `Labelable` associated with the event.
	 */
	labelable: Labelable;
}

/**
 * Represents an `unlocked` event on a given issue or pull request.
 */
export interface UnlockedEvent extends Event, Node, MetaField<'UnlockedEvent'> {
	/**
	 * Object that was unlocked.
	 */
	lockable: Lockable;
}

/**
 * Represents an `unmarked_as_duplicate` event on a given issue or pull request.
 */
export interface UnmarkedAsDuplicateEvent extends Event, Node, MetaField<'UnmarkedAsDuplicateEvent'> {
	/**
	 * The authoritative issue or pull request which has been duplicated by another.
	 */
	canonical?: Nullable<IssueOrPullRequest>;

	/**
	 * The issue or pull request which has been marked as a duplicate of another.
	 */
	duplicate?: Nullable<IssueOrPullRequest>;

	/**
	 * Canonical and duplicate belong to different repositories.
	 */
	isCrossRepository: boolean;
}

/**
 * Represents an `unpinned` event on a given issue or pull request.
 */
export interface UnpinnedEvent extends Event, Node, MetaField<'UnpinnedEvent'> {
	/**
	 * Identifies the issue associated with the event.
	 */
	issue: Issue;
}

/**
 * Represents an `unsubscribed` event on a given `Subscribable`
 */
export interface UnsubscribedEvent extends Event, Node, MetaField<'UnsubscribedEvent'> {
	/**
	 * Object referenced by event.
	 */
	subscribable: Subscribable;
}

/**
 * Represents a `user_blocked` event on a given user.
 */
export interface UserBlockedEvent extends Event, Node, MetaField<'UserBlockedEvent'> {
	/**
	 * Number of days that the user was blocked for.
	 */
	blockDuration: UserBlockDuration;

	/**
	 * The user who was blocked.
	 */
	subject?: Nullable<User>;
}
