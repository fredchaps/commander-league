<script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;
	// Stores
	import { ListBox, ListBoxItem, modalStore, popup, type PopupSettings } from '@skeletonlabs/skeleton';

	console.log(parent)
	let comboboxValue: string;
	
	// Form Data
	const formData = {
		name: 'Jane Doe',
		tel: '214-555-1234',
		email: 'jdoe@email.com',
	};

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {

		// TODO:
		// store  game winner 
		// create a toast notification for status

		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';

	const tableArr = [
		{
			username: 'player 1',
			seat: 1
		},
		{
			username: 'player 2',
			seat: 2
		},
		{
			username: 'player 3',
			seat: 3
		},
		{
			username: 'player 4',
			seat: 4
		}
	]
    
	let popupCombobox: PopupSettings = {
		event: 'focus-click',
		target: 'combobox',
		placement: 'bottom',
		// Close the popup when the item is clicked
		closeQuery: '.listbox-item'
	};

</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<!-- Enable for debugging: -->
		<!-- <pre>{JSON.stringify($modalStore[0], null, 2)}</pre> -->


	<div class="card w-48 shadow-xl py-2 z-50" data-popup="combobox">
		<!-- Listbox -->
		<ListBox rounded="rounded-none">
			<ListBoxItem bind:group={comboboxValue} name="medium" value="books">
				Books
			</ListBoxItem>
			<ListBoxItem bind:group={comboboxValue} name="medium" value="movies">
				Movies
			</ListBoxItem>
			<ListBoxItem bind:group={comboboxValue} name="medium" value="television">
				Television
			</ListBoxItem>
		</ListBox>
		<!-- Arrow -->
		<div class="arrow bg-surface-100-800-token" />
	</div>

	
		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Seat</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{#each tableArr as row, i}
						<tr>
							<td>{row.seat}</td>
							<td>{row.username}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<form class="modal-form {cForm}">
			<label class="label">
				<span>Select a winner</span>
				<select class="select">
					{#each tableArr as row, i}
						<option value={row.username}>{row.username}</option>
					{/each}
				</select>
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Save</button>
    </footer>
	</div>
{/if}